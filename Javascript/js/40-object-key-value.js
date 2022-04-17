/* //** Object - Key - Value */

//[key1:1, key2:2,key3:3]
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "MacBook Pro",
    //model-name:"MacBook Pro",
    model_name: "MacBook Pro 2",
}
console.log(laptop1)

//Doğru anahtar bilgisi oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])


// Anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

// Anahtar bilgilerine ulaşmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo, ":", laptop1[keyInfo])
})

// Anahtar bilgilerine ulaşmak (values) -> Object.values(item)
let values = Object.values(laptop1)
values.forEach(value => {
    console.log("Value: ", value)
})


// Square brackets kullanımı
// Birden fazla kelime içeren property'ler için dot notation kullanamayız. Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır:

/* let person = {}; // set (oluştur)
person["likes sea"] = true; // get (getir)
console.log(person["likes sea"]); // true (doğru)
delete person["likes sea"]; // delete (sil) */

// Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:

/* let animal = {}; // set
let key = "flies"; // key atama
animal[key] = true; // value atama */

// Yeni objemiz:

/* animal = {
    "flies": true // yeni eklediğimiz key value çifti
}; */

// Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir. Sonrasında property’ye erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.

/* let person={
    name: "Jack",
    age:20,
};
let key=prompt("Özellik: ", "name");


// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)

    // Dot notation'ı benzer şekilde kullanamayız.
    */


// Computed property kullanımı

// Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış özellikler(computed properties) denir.

// Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

function objectify(key, value) {
    return {
        [key]: value
    }
}
objectify("name", "Anna"); //  {name: "Anna"} atanmış yeni değer

// * Key, square brackets [ ] içine alındığı sürece herhangi bir ifade olabilir.
// Kompleks Objeler Kullanımı

// Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır. Kompleks bir obje örneği de

/* let state = {
    users: [{
            name: "Brock",
            age: 25,
            favoriteColor: "red"
        },
        {
            name: "Jessie",
            age: 17,
            favoriteColor: "yellow"
        },
        {
            name: "James",
            age: 41,
            favoriteColor: "blue"
        },
        {
            name: "Winnie",
            age: 18,
            favoriteColor: "purple"
        }
    ],
    settings: {
        version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
    },
    banList: ["Ash", "Angelica", "Tom", "Jerry"]
} */

// Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. "settings" property'sinde ise obje içinde obje tutulmakta. "banList" property'sinde ise basit bir array tutulmakta.

// "banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.

// alert(state.banList[2])

// "settings"lerdeki "website" değerine ulaşmak istersek şu şekilde ulaşabiliriz.

// alert(state.settings.website)

// "user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.

// alert(state.users[2].favoriteColor)


// JSON Veri Tipini Obje Olarak Kullanmak

// Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz. Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. Bu işlem çok basit bir şekilde yapılabilir.

// const veri = require("./dosyanizin/dizini/veri.json") // Bu işlemde require fonksiyonu ile dosyanızı import etmektesiniz

// Bu işlemden sonra veri bileşenini obje şeklinde kullanabilirsiniz. 

/* Özet

* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 
 */
// Obje Metodları

// Plain objects için aşağıdaki metotlar(method) kullanılabilir:

// Object.keys(obj) // Key’lerden oluşan bir array döner(return).
// Object.values(obj) // Value’lardan oluşan bir array döner.
// Object.entries(obj) // [key, value] çiftlerinden oluşan bir array döner. 

// Tüm bu Object.* metotları array veri tipinde değer döner.

// let person = {
//     name: "Jack",
//     age: 20
// };
// Object.keys(person) = ["name", "age"]
// Object.values(person) = ["Jack", 20]
// Object.entries(person) = [
//     ["name", "Jack"],
//     ["age", 20]
// ]

// JSON Metodları

// Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.

let person = {
    name: "Jack",
    age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject);
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 