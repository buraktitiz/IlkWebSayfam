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



//** some()
// TRUE DÖNEBİLMESİ İÇİN DİZİDEKİ HERHANGİ BİR ELEMANIN FONKSİYONDAKİ KOŞULA UYMASI GEREKİR

let someOrnekSayi = [4, 5, 6]

let someSonuc = someOrnekSayi.some(function (ornekSayi) {
    return ornekSayi > 5;
})
console.log(someSonuc) // dizinin içinde 5'ten büyük bir eleman bulunduğundan dolayı true döndürür

let someSonuc2 = someOrnekSayi.some(function (ornekSayi) {
    return ornekSayi < 3
})
console.log(someSonuc2) // dizinin içinde 3'ten küçük bir eleman bulunmadığından dolayı false döndürür



//** every()
// every() metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol eder.
// some metodunda olduğu gibi, boolean yani true veya false olarak döndürür
// TRUE DÖNEBİLMESİ İÇİN DİZİDEKİ TÜM ELEMANLARIN FONKSİYONDAKİ KOŞULA UYMASI GEREKİR

let everySayi = [4, 5, 6]

let everySonuc1 = everySayi.every(function (everyOrnekSayi) {
    return everyOrnekSayi > 3
})
console.log(everySonuc1) //dizideki tüm sayılar 3'ten büyük olduğundan dolayı sonuç false döner

let everySonuc2 = everySayi.every(function (everyOrnekSayi) {
    return everyOrnekSayi < 5
})
console.log(everySonuc2) // dizideki tüm sayılar 5'ten küçük olmadığından dolayı sonuç false döner


//** filter()
// filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza yani dizi elemanlarını filtrelememize yardımcu olur. 
// yeni oluşacak diziyi bir değişkende saklıyoruz
// Orijinal dizi aynı kalıyor, bozulmuyor

let filterSayi = [1, 2, 3, 4, 5, 6, 7]

let filtrelenmisSayilar = filterSayi.filter(function (filtreliSayiOrnek) {
    return filtreliSayiOrnek > 3
})
console.log(filtrelenmisSayilar) // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5,6,7] olacaktır.
console.log(filterSayi) // Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5,6,7] olarak görürüz.


//** find()
// find metodu belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar. Diğer metotların aksine find metodu elemanın kendisini döner.
// koşulu sağlayan birden fazla eleman varsa bulunduğu ilk elemanı döner
// koşulu sağlayan bir eleman bulamazsa undefined döner

let findSayilar = [4, 5, 6, 7]

let bulunacakSayi = findSayilar.find(function (ornekSayiFind) {
    return ornekSayiFind === 5
})
console.log(bulunacakSayi) // Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.

let bulunacakSay2 = findSayilar.find(function (ornekSayiFind) {
    return ornekSayiFind > 6
})
console.log(bulunacakSay2) // Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.

let bulunacakSay3 = findSayilar.find(function (ornekSayiFind) {
    return ornekSayiFind < 3
})
console.log(bulunacakSay3) // Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.


//** sort()
// sort metodu dizi içerisindeli elemanları sıralamaya yarar.
// Orijinal idzi sıralanmış şekilde döner 
// Eğer parametre olarak bir fonksiyon verilmezse dizinin elelmanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır
// Artan veya azalan için farklı bir yol izlenmelidir.
let sortSayilar = [3, 5, 2, 4, 10, 14]

sortSayilar.sort()
console.log(sortSayilar)
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)


//** Fakat istediğimiz sonucun elde edilmesi açısından fonksiyon ile yapılırsa kodumuz şu şekilde olacaktır:
let sortSayilar2 = [3, 5, 2, 4, 10, 14]

sortSayilar2.sort(function (a, b) {
    return a - b // a-b dediğimiz için en küçük değerden başlayarak sıralar. Ama b-a'yı return etseydik bu defa en büyük değerden başlayarak sıralayacaktı. 
})
console.log(sortSayilar2)




//** DİZİ İÇERİSİNDE DİZİ OLUŞTURMA **************************************

let diziIcindeDizi = [
    ["elma", 3, 5, 7, 8],
    ["armut", 5, 9, 12, 18],
    ["şeftali", 2]
]
let ilkEleman = diziIcindeDizi[0]
let ikinciEleman = diziIcindeDizi[1]
let ucuncuEleman = diziIcindeDizi[2]

console.log(ilkEleman) //["elma", 3]
console.log(ikinciEleman) //["armut", 5]
console.log(ucuncuEleman) //["şeftali", 2]


let kacElma = diziIcindeDizi[0][3] // elma ilk dizimiz. Bu yüzden sıfır vermemiz gerekiyor. Ve sonrasında 3 verdiğimiz zaman elmanın 3. sıradaki değeri kaç ise onu ekrana yazdırıyor ->7
console.log(kacElma)

let kacArmut = diziIcindeDizi[1][2] // Armut ikinci dizimiz. Bu yüzden 1 vermemiz gerekiyor. Ve sonrasında 2 verdiğimiz zaman elmanın 2. sıradaki değeri kaç ise onu ekrana yazdırıyor ->9
console.log(kacArmut)
let kacSeftali = diziIcindeDizi[2][1] //Şeftali üçüncü dizimiz. Bu yüzden 2 vermemiz gerekiyor. Ve sonrasında 1 verdiğimiz zaman elmanın 1. sıradaki değeri kaç ise onu ekrana yazdırıyor ->2 (Eğer tanımlanmış değerden daha fazla index'in ekrana yazdırıllması istenirse sonuç undefined dönecektir)
console.log(kacSeftali)




// Kalemlik örneği
let kalemlik = new Array()

kalemlik[0] = new Array("silgi", 2, "mavi")
kalemlik[1] = new Array("kalem", 3, "kırmızı")
kalemlik[2] = new Array("cetvel", 7, "sarı")

console.log(kalemlik) // Çıktı olarak [["silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 7, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

let silgiElemani = kalemlik[0] // Kalemlik dizisinin ilk elemanının birinci elemanı döner yani "silgi" dönmesini bekleriz.
let kalemElemani = kalemlik[1]
let cetvelElemani = kalemlik[2]

console.log(kalemlik[0][2]) // Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[1][2])
console.log(kalemlik[2][2])




//** Alıştırma1
// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let alistirmaDizi1 = [2, 5, 8, 11, 15, 17]

let ondanBuyukSayilar = alistirmaDizi1.filter(function (ornek1) {

    return ornek1 > 10 // önce 10'dan büyük olan sayıları filtreledik
})
let sayilarinCarpimi = ondanBuyukSayilar.map(function (ornek1) {
    return ornek1 * 5 // sonra da 10'dan büyük olan sayıları 5 ile çarptık
})
console.log(sayilarinCarpimi)



//** Alıştırma2

let alistirmaDizi2 = [3, 6, 9, 14, 16]

// Uygun dizi metotlarını kullanarak yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.


function myFunction(alistirmaDizi2) {
    let sonuc = alistirmaDizi2.find(function (sayi) {
        return sayi > 5
    })
    if (sonuc > 0) {
        console.log("Beşten büyük bir eleman mevcut")
    } else {
        console.log("Beşten büyük bir eleman mevcut değil")
    }
}
myFunction(alistirmaDizi2)



//** Alıştırma3

let alistirmaDizi3=[2,3,4]
// Uygun bir dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) olarak veren fonksiyon


let sayiCarpimlari=alistirmaDizi3.reduce (function(carpim,sayilar){
    return carpim*sayilar

})
console.log(sayiCarpimlari)