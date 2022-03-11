/* ********* String Veri Türü İşlemleri */
/* https://www.w3schools.com/jsref/jsref_obj_string.asp */

let email=  "deneme@gmail.com"
let firstName="burak"
let lastName="TITIZ"

/* string karakter sayısı ->length */
console.log(email.length)

/* İlk karakteri bulma -> [0] */
console.log(firstName[0])
console.log(firstName.charAt(0))

/* Büyük - Küçük harf */
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)

/* String içinde istediğimiz bilgiyi aramak ve yerini bulmak - > search */
console.log(email.search("@"))
console.log(email[6])
console.log(email.search('olmayan')) //-1 

/* belli bir yere kadar al  ->slice: (domain bilgisini aldık)*/ 
let DOMAIN =email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0,DOMAIN.indexOf('.'))) // 
/* yukarıda sadece gmail kısmını aldık.  Yani;
DOMAİN'in(gmail.com) 0.(sıfırıncı) indexinden noktaya(.) kadar olanı al ve yazdır.
*/


/* bilgiyi değiştirmek -> replace */
email= email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)


/* istediğim bilgi var mı  ->includes */
email.includes('ghjlşhögf') //false
email.includes('@') //true
console.log(email)


/* istediğim bilgiyle başladı mı? bitti mi? ->startsWidth, endsWidth */
console.log(email.endsWith('kodluyoruz.org'))


/* İlk harflerini büyük yapmak */
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` 
/* yukarıdaki kodun açıklaması şöyle:
firstName'in 0. index'ini al ve büyük yaz. 
firstName'in 1. index'inden itibaren al ve sonrasını küçük yaz.
lastName'in 0. index'ini al ve büyük yaz. 
lastName'in 1. index'inden itibaren al ve sonrasını küçük yaz.
 */
console.log(fullName)


/* Genel Çalışma */
var isim="burak titiz"
console.log(isim.indexOf("k")) //4
console.log(isim.lastIndexOf('i')) //9

console.log(isim.search('tiz'))  //8
console.log(isim.search("tiz")) //8
console.log(isim.slice(6,10)) //titi (Bitiş index numarasındaki karakter sonuca dahil edilmez)


/* Not: Tek index yazmak ise yazılan index numarasından sonra gelen tüm karakterleri almasına neden olur.
 */
console.log(isim.slice(2)) // rak titiz
console.log(isim.replace("titiz","deagle")) // burak deagle
console.log(isim.toUpperCase()) // BURAK TITIZ
console.log(isim.toLowerCase()) // burak titiz

var ad="burak"
var soyad="titiz"
console.log(ad.concat("", soyad)) //buraktitiz (Arada boşluk yok)
console.log(ad.concat(' ', soyad)) //burak titiz (Arada boşluk var)
console.log(isim.charAt(3)) // a
console.log(isim.charCodeAt(2)) // 114 (r'nin karşılık değeri)


let yeni_isim="burak,deagle"
let isimler=yeni_isim.split(',');
console.log(isimler); // Array ["burak", "deagle"]

let asd="sads, dfkh"
let karmaasd=asd.split('')
console.log(karmaasd) // Array(10) [ "s", "a", "d", "s", ",", " ", "d", "f", "k", "h" ]
/* Yukarıdaki yazdırma işleminde her karakter tek tek yazıldı. 
Çünkü karmaasd'nin asd.split'ini ayırmadık */


firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"