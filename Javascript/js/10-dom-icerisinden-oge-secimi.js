/* ********** DOM İçinden Öge Seçimi */

/* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector */

/* let h2= document.getElementsByTagName('h2') */
let title=document.getElementById('title')
title.innerHTML="Değişen Bilgi";
console.log(title.innerHTML);

let link=document.querySelector("#kodluyoruzLink")
link.innerHTML +=" değiştirildi"
link.style.color="red"
link.classList.add('btn')