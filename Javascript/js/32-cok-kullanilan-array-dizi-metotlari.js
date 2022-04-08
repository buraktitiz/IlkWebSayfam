/* //**Çok Kullanılan Array(Dizi) Metotlaro ve Array içinde Array */

let items = [1, 2, 3, 4, 5]


//**Array içinde Array(Dizi)
let femaleUsers = ["Ayşe", "Hülya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length) // burada 7 tane öge olduğunu gösterir. Çünkü femaleUsers ve maleUsers değişkenlerini birer öge, items'ı da 5 elemanlı öge olarak konsolda gösterir. Bu saye 5+1+1=7 ögeli bir items.length'imiz olur.


console.log(items[0].length) // Array içindeki istediğimiz Array'in length bilgisini aldık. Yani 3.(Ayşe,Hülya, Merve)
console.log(items[0][0]) // Ayşe bilgisine ulaştık


//**Array içerisinden öge ayırmak ->splice(pos,item?)
let newItems = items.splice(1, 5)
console.log("newItems: ", newItems)
console.log("items: ", items)


//**Array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
// console.log(items)

items.push("ipsum")
// console.log(items)
console.log(items[items.indexOf("ipsum")]) // ipsum'u index içinde buluyoruz
console.log(items.indexOf("ipsum")) //ipsum'un kaçıncı index'te olduğunu buluyoruz

//**Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ögeyi çıkarttık
console.log("copyItems: ", copyItems)
console.log("items: ", items)

console.log("kopyalandıktan sonraki hali: ")
copyItems = items.slice()
copyItems.pop()
console.log("copyItems: ", copyItems)
console.log("items: ", items)


//**İki Array bilgisini birleştirmek -> [...ES6, ...ES6]
let es6Items = [...items] // es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)


let allUsers = [...femaleUsers, ...maleUsers] // es birden fazla array yapısını birleştirmek
console.log(allUsers)


//**Array içerisindeki bilgiyi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(' - '))


//**İstediğimiz Index bilgisine öge eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length - 1, 0, "Melisa")
console.log(allUsers)

allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
console.log(allUsers)



//**Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar);
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.


//** concat metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.
let yiyecekler = ["meyve", "sebze", "kahvaltılık"]
let icecekler = ["süt", "çay"]

let menu = yiyecekler.concat(icecekler)
console.log(menu) // ["meyve","sebze","kahvaltılık","süt","çay"] çıktısı olur




//** ÇALIŞMAMIZIN DEVAMINDA, İÇERİSİNDE FONKSİYON TANIMLADIĞIMIZ VE BU FONKSİYONLARLA DİZİDEKİ ELEMANLARI MANİPÜLE ETTİĞİMİZ DİZİ METOTLARINI İNCELEYECEĞİZ.


//**foreach() - ihtiyacımıza göre parametlrelerden hepsini veya aralarından birkaçını kullanabiliriz

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod ekleyelim

let malzemeler = ["yumurta", "un", "süt"]

malzemeler.forEach(function (malzeme, malzemeIndexi) {
    console.log(malzeme, malzemeIndexi)
})
// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indexlerini) alt alta göreceğiz


// ** map()

// map metodu da forEach gibi kendisine verilen fonkksiyonu dizinin her elemanı için uygular fakar foreach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır
// Bir dizideki sayıların 5 katından oluşan bir dizi oluşturalım

let sayilar = [1, 2, 3]

let sayilarin5Kati = sayilar.map(function (sayi) {
    return sayi * 5
})
console.log(sayilarin5Kati) //5,10,15
console.log(sayilar) //1,2,3



//** sone()

let someOrnekSayi = [4, 5, 6]

let someSonuc = someOrnekSayi.some(function (ornekSayi) {
    return ornekSayi > 5;
})
console.log(someSonuc) // dizinin içinde 5'ten büyük bir eleman bulunduğundan dolayı true döndürür

let someSonuc2 = someOrnekSayi.some(function (ornekSayi) {
    return ornekSayi < 3
})
console.log(someSonuc2) // dizinin içinde 3'ten küçük bir eleman bulunduğundan dolayı false döndürür