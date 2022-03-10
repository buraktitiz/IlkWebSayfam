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

/* Değişken Türünü Değiştirmek (Type Coercion)*/

/* Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. Türkçesi mahalle baskısı olarak karışınıza çıkabilecek olan type coercion'ın iki tipi vardır. Bunlar explicit ve implicit. Explicit için metotlarla yapılan dönüşüm denilebilir. Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz */

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
    String Dönüşümü:
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

*/

