/* **********Ternary Operator*********** */


/*

Ternary Operator 3 adet parametre alan tek JavaScript operatörüdür. If kullanarak kontrol etmek istediğimiz koşullarda ternary operator kullanarak satır sayısı olarak avantaj sağlayabiliriz.

Ternary operatörünün aldığı 3 parametre şu şekildedir:

    İlk önce bir condition belirtiriz ve sonrasında hemen bir ? koyarız
    Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna : koyarız
    Ve sıra geldi koşulumuz yanlış ise ne yapmak istediğimize.

    raining ? umbrella : nothing
    raining ? umbrella // yes
    raining: nothing // no

    Gördüğümüz üzere eğer yağmur yağıyorsa umbrella dönecek, fakat yağmur yağmıyorsa nothing dönecek.

Yazdığımız condition'nın bize direkt olarak false dönmesinin yanı sıra, aynı zamanda false dönecek diğer ifadeler şunlardır: null, NaN, 0, ""(boş string) ve undefined.
Ternary Operatorleri Zincirleme

Ternary operatörleri aynı zamanda birbiri ardına zincirleyerek (chaining) kullanabiliriz. Bu sayede farklı olasılıkları da katarak daha detaylı senaryoları kontrol edebiliriz.

var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."

Burada koşullar denenecek ve doğru olan koşul sonrasında bir string dönecek. Yukarıda gördüğümüz üzere money değişkeni 30'dan büyük olduğu için ‘Satın alabilirsin..’ yazısının yazdırılması beklediğimiz bir sonuçtur.

Peki eğer money değişkenine hiçbir atama yapmasaydık ne olacaktı ? Bu durumda en sonda belirttiğimiz default değer dönecekti. 

*/