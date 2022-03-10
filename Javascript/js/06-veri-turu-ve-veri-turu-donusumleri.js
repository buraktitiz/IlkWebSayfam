/* ********** Veri Türünü Öğrenmek ve Veri Türü Dönüşümleri ************ */


/* veri türünü öğrenmek typeof: */

let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price : ", typeof (price));
console.log("stringPrice : ", typeof (stringPrice));
console.log("hasPassword: ", typeof (hasPassword));


/* string (metinsel) bilgileri int ve float'a dönüştürmek */
let number1 = "11";
number1 = parseInt(number1);
console.log("number1: ", number1, typeof (number1));

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2: ", number2, typeof (number2));

let number3 = "11.1";
number3 = Number(number3);
console.log("number3: ", number3, typeof (number3));

let number4 = "11.4";
number4 = Number(number4);
console.log("number4: ", number4, typeof (number4));

/* number veri tipinden string'e dönüştürmek: */
let number5 = 55;
number5 = number5.toString()
console.log(number5, typeof (number5));

/* 
    Değişken Türünü Değiştirmek (Type Coercion)

 Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. Türkçesi mahalle baskısı olarak karışınıza çıkabilecek olan type coercion'ın iki tipi vardır. Bunlar explicit ve implicit. Explicit için metotlarla yapılan dönüşüm denilebilir. Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz */

/* 
Explicit Coercion
String(123) //"123"
ParseInt("123") //12

Implicit Coercion
if(3<5) // true
console.log('' + 123) // "123"
12/"6"  //2
 */

/* 
Şimdi bu dönüşümlerin nasıl yapıldığını inceleyelim. 
   
    ***String Dönüşümü***
Eğer bir değeri açık bir şekilde String’e dönüştürmek istiyorsak String(), fonksiyonunu kullanırız. Binary (ikili) + operatörü bir string ifadeye uygulandığında implicit coercion tetiklenir. Örneklerle bunu daha iyi anlayalım:

String(123) // “123” explicit
123 + '' // “123”    implicit

Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”

Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.

String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown

    ***Boolean Dönüşümü***
Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır. Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !)

Boolean(2) // explicit
var a=!!2 //explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator

Boolean tiplerle uğraşırken truthy, falsy değerler işin içine girerler. Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur. Bunlar;

Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

Önemli NOT: Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar. Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile. Örneklerle daha iyi anlayalım.

* veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
 eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || ”” || false || -0 || 0 // 0
var c= 0 ||  “”  ||  “ 123 ” || 4 ; // ”123” dolu string true dönecektir

* ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
 eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7


    Nesneler (Objects) için Type Coercion

Şimdiye kadar primitif değerler için type coercion hakkında bilgi sahibi olduk. Nesneler için bu durum biraz daha farklı. JavaScript'te nesneler referans tipler olduğundan üzerinde işlem yapabilmek zordur. İşlem yapabilmek için elimizde primitif değerler olması gerekir. Bu durumda referans tipler primitif tiplere zorlanır. Nesneler için en kolay tip dönüşümü boolean'dır. Primitif olmayan herhangi bir değer örneğin içi dolu veya boş bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true

Nesnelerde de matematiksel veya mantıksal işlemler yapmak mümkündür. İlk paragrafta belirttiğim gibi bu işlemi ancak primitif bir değere dönüştürerek yapabiliriz. Bu dönüşüm için, giriş nesnesinin (input object) valueOf ve toString metotlarından faydalanılır. Bu iki metot Object.prototype da tanımlanmıştır. Bu sayede türetilmiş tüm tiplerde kullanılır. Örneğin Tarih (Date), Dizi (Array) gibi. İlk olarak nesneler toString() e girer ve çıkan değer primitifse o değeri döner. Primitif değilse valueOf() içine girer. valueOf()'tan çıkan sonuç primitifse o değeri döner değilse error fırlatır.

console.log([1]+[1,2,3])

İşlem yapabilmek için [ 1 ] ve [ 1,2,3 ] öncelikli olarak primitif türe zorlanır

[ 1 ].toString(); // sonuç "1" verir
[ 1,2,3 ].toString() // sonuç "1,2,3" verir. Bu durumda iki string ifadenin toplanmasından çıkan sonuç "1" + "1,2,3" --> "11,2,3" olacaktır.

Genel olarak algoritma aşağıdaki gibidir:

Primitif tipler için:

Eğer değer(input) primitif ise herhangi bir işlem yapma, dön.
input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
input.valueOf() metodunu çağır(Call). Eğer sonuç primitif ise dön.
Ne input.toString() ne de input.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
Referans tipler için:

input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön.
Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
NOT: == operatörünün (lose equality- zayıf eşitlik) farklı iki tipteki a ve b değişkenleri için pratikte nasıl farklı davrandığını, JavaScript Comparison Table(https://dorey.github.io/JavaScript-Equality-Table/)’de gösteren matristen görebilirsiniz.


*/

