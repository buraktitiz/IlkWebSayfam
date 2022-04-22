/* //** Object İçinde Metot Nasıl Ekleriz */

// let user1={
//     firstName:"Burak",
//     lastName:"TİTİZ",
//     score:[1,2,3,4],
//     isAvtive: true,
//     shortName:function(){
//         return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
//     }
// };

// console.log(user1)




// Metodu özellik olarak eklemek
// Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi, önceden tanımlanmış bir nesneye sonradan da eklenebilir. Öncelikle ilk durumu ele alıp aşağıdaki örneği ona göre inceleyelim.

// Örneğin; "person" adında bir nesne oluşturalım ve bu nesnemiz "name", "surname","age","city" özelliklerine ve bu kişinin bana tüm bilgilerini gösterecek bir "introduce" metoduna sahip olsun.

/* var person ={
    name: "Rıza",
    surname: "Soylu",
    age: 67,
    city: "İstanbul",
    introduce:function() {
        console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
    },
};

Yukarıdaki gibi, metot tanımlanırken function() anahtar kelimesi kullanılarak yapılabileceği gibi EcmaScript6'nın arrow function yönteminin söz diziminden yararlanarak yapmak da mümkündür. Fakat burada dikkat edilmesi gereken noktalardan biri arrow functionlar this erişimine sahip değildir. Yani aşağıdaki gibi bir kullanımda introduce fonksiyonu çalıştırıldığında çıktıda özellikler undefined (tanımlanmamış) olarak gözükecektir. */


/* var person ={
    name: "Rıza",
    surname: "Soylu",
    age: 67,
    introduce:() => { 
        return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`
    },
};

Bir metodun arrow function söz dizimi kullanılarak yapılmak istendiği bir durumda özelliklere nesnenin ismiyle erişilebilir. Buna göre yukarda arrow function kullanarak oluşturduğumuz metot içerisinde özelliklere erişim şu şekilde olacaktır; */




/* var person ={
    name: "Rıza",
    surname: "Soylu",
    age: 67,
    city: "İstanbul",
    introduce:()=>{
        return ` My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
    },
}; */






/* Şimdi de önceden oluşturulmuş bir nesneye nasıl metot ekleyebiliriz ona bakalım. Aslında burada metodun sahip olabileceği yapı değişmiyor yani function() anahtar kelimesi veya arrow function söz dizimi kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak person nesnemize myCity adında yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin.

person.mycity=function(){
    console.log(`I live in ${this.city}`);
};
person.mycity();
 */


/* Prototype Konusu ve Prototype Yöntemi

Buraya kadar obje tanımlamayı ve objelere fonksiyon eklemeyi öğrendik. Ancak öğrendiğimiz yöntemde key-value yani anahtar değer yöntemini kullanmıştık.

Ancak nesneye yönelik programlama konseptlerinde objelerin ve sınıfların çok daha detaylı kullanım alanları mevcuttur. Bu noktada da objeye fonksiyon ekleme konusunda karşımıza özel bir kullanım geliyor. Bu kullanımdan önce netleştirmemiz gereken bazı konular var.

Öncelikle JavaScript'te çoğu tanımın bir obje olduğunu bilmemiz gerekiyor. Evet biraz garip gelebilir ama fonksiyonlar da dahil olmak üzere çok tanımlama bir objedir. Bu obje tabanlı yapısı sayesinde fonksiyonları, başka fonksiyonlara parametre olarak verebilir ayrıca bir fonksiyon da döndürebiliriz.

Bu noktada fonksiyonların ne olduğunu ve nasıl çalıştığını anlamamız gerekiyor. Dile ait bu detayları öğrenebilirsek sonra farklı kullanımlardan rahatça faydalanabiliriz.

Fonksiyonlar JavaScript dilinde, Function sınıfının birer objeleridir. Nasıl yani? Evet fonksiyon diye diye bağrımıza bastığımız yapılar da aslında bir sınıfın objeleridir. Hatta bu sınıfın detaylarına ve özelliklerine buradan ulaşabilirsiniz. Ama durun daha bitmedi. Üstelik bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype bile var. Hatta bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz. Örnek : 

const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
//** "fonksiyonAdi"
*/

/* Yukarıdaki örnekte basit bir fonksiyon tanımladık ve bu fonksiyonun adını "." operatörüyle eriştik. console.log(fonksiyonAdi.name) kodunu çalıştırdıktan sonra "Merhaba Kodluyoruz" çıktısının gelmediğine dikkat edin. Burada fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik.

Öyleyse JavaScript'te fonksiyonların da birer obje olduğunu öğrendik. Peki daha önce öğrendiğimiz şekilde bu js fonksiyonlarına birer yeni özellik ekleyebilir miyiz?

Peki konumuz objeler ve objelere fonksiyon eklenmesi değil miydi? Fonksiyonların özellikleriyle objelerin ne ilgisi var Firdevs hanım? Bu noktada da obje oluşturmanın yeni bir yöntemini öğreneceğiz. */

/* function Insan(isim, yas) {
    this.isim = isim;
    this.yas = yas;
} */

/* Yukarıda gördüğünüz yapının adı //**JavaScript Object Constructor*/
//Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keyword'ünü kullanarak da bir sınıf tanımlayabiliyorduk. Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. Bu şekilde bir obje mutable(mutasyona uğrayabilir daha az havalı haliyle özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz. Sınıf ile obje arasındaki farkı nesneye yönelik programlama konusunda daha detaylı öğrenebilirsiniz ancak burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz. 

/* const ali = new Insan("ali",21);
console.log(ali.yas);
// 21
 */



/* Böylece artık "ali" isminde bir objemiz hazırlanmış oldu. Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksiyon eklemek istersek? Kafanız karışmasın fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. Ancak zaman değişti ve artık bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. Bu fonksiyonu/özelliği öyle bir şekilde eklemeliyiz ki olmayan bir fonksiyon/özellik eklemek istiyoruz. Objelere özellik eklemek konusunda bir problemimiz yok çünkü bunun mutable olduğunu biliyoruz .

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"

Peki sınıflarda bu durum nasıl oluyor? Sınıf olarak belirlediğimiz şablona tanımı değiştirmeden nasıl fonksiyon veya özellik ekleyebiliriz?

İşte bu durumla karşılaştığımızda da prototype özelliği karşımıza çıkar. Peki prototype nedir? */

/* Prototype, sınıflara JavaScript tarafından otomatik olarak eklenen bir objedir. Eklenmek burada çok doğru bir tabir değil. Aslında bütün objeler tarafından miras alınan bir özelliktir. Bu özelliği de "proto" key'i ile ekler. Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz. Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz. Bu kısımların detayları JavaScript'te nesneye yönelik programlama konusuna ait olduğu için kapsamı genişletmeden birkaç örnek vererek konuyu tamamlayalım :

Sınıfa Prototype yardımıyla fonksiyon eklemek : */

/* 
Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
//**Output : "Merhaba Kodluyoruz" */


/* Objeye prototype yardımıyla fonksiyon eklemek : */

/* ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
Output : "Tekrar Merhaba Kodluyoruz!" */

/* Bu tarz bir kullanıma özellikle büyük projelerde ihtiyacımız olabilir. Prototype özelliğini kullanarak da objelere ve sınıflara sonradan fonksiyonlar hatta farklı özellikler ekleyebiliriz. */