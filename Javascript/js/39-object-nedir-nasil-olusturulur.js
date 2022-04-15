/* //** Object (Nesne) Nedir? Nasıl Oluşturulur */

//** Objeler içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String, number, boolean vb) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

// let arrayObj=[1,2,3]
// let object1={obf:1}

// console.log("arrayObj", typeof(arrayObj))
// console.log("object1", typeof(object1))

// let item1=new Object()
// let item2={}
// console.log("item1", typeof(item1))
// console.log("item2", typeof(item2))

//Object Oluşturmak
// let item3={}
// let item4=new Object()


let artist = { //artist isimli objemiz
    name: "Ali", // name isimli, "Ali" primitive değerine sahip property
    album: { // album isimli, içerisinde başka bir objeye yer veren property
        title: "Reptilectric",
        year: 2008
    },
};


// ** Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi
// ** const keyword ile atanmış olsa bile değiştirilebilirler. Fakat primitive değerlerden 
// ** farklı olarak objeler, referans yoluyla değiştirilirler ve değilen obje, yeni bir 
// **hafıza adresine sahip olur. Çünkü Primitive değerlerin aksine objeler, JavaScript  
// ** istemcisinin belleğinde, sahip oldukları değerlerle dğeil, sistemin aradığı hafıza  
// ** adresleriyle kayıtlıdırlar. Bunun ayrımını şöyle açıklayalım.

// ** aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let baskaBirMesaj = "merhaba";
console.log(mesaj == baskaBirMesaj); // true


// ** ayn değerlere, farklı memory adreslerine sahip 2 obje
let obje = {
    mesaj: "merhaba"
}
let baskaBirObje = {
    mesaj: "merhaba"
}
console.log(obje == baskaBirObje); // false

/* Bu örnekte görüldüğü gibi, aynı primitive değerlere sahip olan “mesaj” ve “başkaBirMesaj 
isimli değişkenler eşit kabul ediliyor. Fakat “obje” ve “başkaBirObje” isimli objeler de bire
bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar. Çünkü bu iki obje, arka
planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa
da farklı kabul ediliyorlar. */


// ** Obje Oluşturmak
// Objeler 3 şekilde oluşturulabilir.
// 1. Object literal
// 2. new Object keyword'ü
// 3. Object.create() fonksiyonuyla

// Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir
// **Object.create() yöntemi ise mevcut bir objeden katılım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.



//** 1. Object Literals
// ** JavaScript'te obje oluşturmanın en kolay yolu olarak bilinir. Süslü parantez {}kullanılarak oluşturulan objenin içerdiği property'lerin değerleri iki nokta : işaretiyle belirtilir. Property'ler birbirlerinden virgül, yoluyla ayrılır.

let countriesTalkUkrainen = {
    continent: "europe",
    language: "ukrainen"
};

// countriesTalkUkrainen isimlli obje, continent ve language adında iki property'e sahip. Bu property'ler de iki primitive değeri barındırıyor


// 2. New Keyword ile Obje Oluşturmak
/* New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı
constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak ve
sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. Fonksiyon
çağrısı, objenin başlatılması için olmazsa olmazdır. Aşağıdaki örnekte standart object
invocation kullanarak, Türkçe konuşulan Asya ülkeleri objesini oluşturalım ve tıpkı bir
önceki örnekte olduğu gibi, language ve continent property'leri verelim. */

let countriesTalkTurkish = new Object();
countriesTalkTurkish.continent = "asia";
countriesTalkTurkish.language = "turkish";

// objemizi new keyword ile initialize ettikten sonra property'lerini aradık. Dikkat, Object literal'dekinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık


// Object Prototype
/* Son yöntem olan Object.create() yöntemine geçmeden önce, prototype hakkında bilgi sahibi
olmak, son yöntemi anlamak için önemli. Javascript’te hemen her objenin bağlantılı olduğu
ikinci bir obje vardır ve bu ikinci objelere prototype denir. Mevcut obje, ikinci objeden
yani prototype’ından kalıtım(inheritence) alır. Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: object.prototype. New keyword'ü kullanılarak oluşturulan objelerin
ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir.
Örneğin new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date
prototype’dan kalıtım alır. */


// 3. Object.create
/* Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken
nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. Aşağıda yer alan örneklere
bir bakalım; */

let noInheritence = Object.create(null); // herhangi bir kalıtım (inheritence) almaz. Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.

let standartObject = Object.create(Object.prototype) //Standart obje kalıtımı alır. standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.

let cyprus = Object.create(countriesTalkTurkish); // cyprus isimli obje örneği ise daha önceoluşturduğumuz countriesTalkTurkish isimli object literal’dan kalıtım alacağı için onunla aynı property'lere sahip olur. Yani argentina objesi, Asya kıtasında bulunduğunu ve Türkçe konuşulduğunu, kalıtım yoluyla sahip olduğu property'lerden belli eder.

cyprus.capital = "lefkosa"; // objeye, ülkenin başkentini belirten yeni bir property atadık. Artık elimizde başkentini, konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.