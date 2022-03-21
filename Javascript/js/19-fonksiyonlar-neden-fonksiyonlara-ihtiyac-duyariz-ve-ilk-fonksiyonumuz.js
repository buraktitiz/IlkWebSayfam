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