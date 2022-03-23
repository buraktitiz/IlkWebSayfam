/* ********* Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridönüş Almak */

/* Temel kurallar */
/* 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç alamayabilir */

/* 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir */

/* 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir. */


let firsName = "Lorem"

function greetings(firsName = "", lastName = "") { // bu fonksiyonumuzun özelliği: deafult parametre alıyor, yani şöyle: ("")
    // Ama default parametre de vermeyebilirdik. Yani (firsName, lastName)
    //console.log(`Merhaba ${firsName ? firsName:""}`)
    //console.log(`Merhaba ${firsName}`)
    console.log(`Merhaba ${firsName} ${lastName}`)
}


console.log(firsName) // değişken bilgisi var
greetings() // fonksiyona parametre göndermedik
greetings("Parametre") // fonksiyona parametre gönderdiğimiz hali

function greetings2(firsName, lastName) {
    let info=`Merhabaaaa ${firsName} ${lastName}`
    return info
}

let greetingsInfo=greetings2("Ad","Soyad")
//let info= "deneme"
console.log(greetingsInfo)


function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info
}
let htmlInfo=`<span style="color:red">Renk Kızıllaştı</span>`
domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info',greetings2("Lorem","Ipsum"))