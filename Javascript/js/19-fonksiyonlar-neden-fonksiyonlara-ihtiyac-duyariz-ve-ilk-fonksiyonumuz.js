/*  ************ Fonksiyonlar Nedir? Neden ihtiyaç duyarız? */
/* İlk Fonksiyonumuzu Tanımlamak: */

function helloWorld(){
    console.log("Hello World")
}

function hello(){
    console.log("Merhaba")
    helloWorld()
}

hello() // Çalıştırmak için hello'yu () ile tanımlayarak çalıştırıyoruz
// Ayrıca yukarıda hellowworld'ü hello'nun içine tanımladık. Orada tanımlı olduğundan dolayı hello çağrıldığında hem Merhaba hem de Hello World yazacaktır.


/* 

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner. Ama konsola yazdırılmalıdır

function carp(sayi1, sayi2) {
sayi1 * sayi2; // return tanımlı değil
};

result=carp(10,20); // undefined 
console.log(topla(10,40)) // 50

 */




/*
var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

/* var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz 
console.log(ekle(10,20)) // 30 
console.log(topla(10,80)) // 90
  */