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




