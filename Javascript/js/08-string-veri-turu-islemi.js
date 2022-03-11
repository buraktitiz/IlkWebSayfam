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


/* istediğim bilgiyle başladı mı? bitti mi? ->startWidth, endsWidth */
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