/* ********* Template Literals Kullanımı *********** */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username="burak"
const DOMAIN = "kodluyoruz.org"

let email=username+"@"+DOMAIN
console.log("Merhaba",username,"Sitemize Hoşgeldin.","Mail adresin: ",email)

let info=`Merhaba ${username} sitemize hoşgeldin. 
Mail adresin: ${email}

mail adresinin uzunluuğu: ${email.length}
Borcunuz: ${(2+5)*10}₺
Günün saat bilgisi: ${new Date().getHours()}

Kısa isminiz: ${username[0]}.
`
/* backticks oluşturmak için: Altgr + , */

console.log(info)   