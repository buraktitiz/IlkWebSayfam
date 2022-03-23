/* ********* Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridönüş Almak */

/* Temel kurallar */
/* 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç alamayabilir */

/* 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir */

/* 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir. */


let firsName="Lorem"

function greetings(firsName="", lastName=""){ // bu fonksiyonumuzun özelliği: deafult parametre alıyor, yani şöyle: ("")
    // Ama default parametre de vermeyebilirdik. Yani (firsName, lastName)

    //console.log(`Merhaba ${firsName ? firsName:""}`)
    console.log(`Merhaba ${firsName}`)
    console.log(`Merhaba ${firsName} ${lastName}`)
}


console.log(firsName) // değişken bilgisi var
greetings() // fonksiyona parametre göndermedik
greetings("Parametre")  // fonksiyona parametre gönderdiğimiz hali

