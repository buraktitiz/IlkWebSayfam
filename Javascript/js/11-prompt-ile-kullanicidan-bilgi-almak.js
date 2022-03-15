/* *********** prompt ile Kullanıcıdan Bilgi Almak */
/* https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt */

/* let fullName=prompt("Lütfen Adınızı Giriniz: ")

let greeting=document.querySelector("#greeting")

greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>` */

let bookName=prompt(`kitap adı ne`)
let bookWriter=prompt(`kitap yazarı kim`)
let bookType=prompt(`Kitap türü nedir`)

let kitapAdi=document.querySelector(`#kitapAdi`)
let kitapYazari=document.querySelector(`#kitapYazari`)
let kitapTuru=document.querySelector(`#kitapTuru`)

kitapAdi.innerHTML=`${bookName}`
kitapYazari.innerHTML=`${bookWriter}`
kitapTuru.innerHTML=`${bookType}`

