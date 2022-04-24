/* //** Object ve Array Destructuring Nasıl Kullanılır */


// Object Destructuring:

let settings = {
    userName: "loremIpsum",
    password: "Badpassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}


// Obje içindeki bilgilerin tek sefferde çıkarılması
// let userName = settings.username
// console.log(userName)
// rename && destructuring yaptık
let {
    username: user,
    password,
    isActive,
    ip: serverIp,
    serverName
} = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(settings)
console.log(user)


// Obje içindeki bazı bilgilerin çıkarılması
let {
    userName: userName2,
    password: password2,
    isActive: isActive2,
    ...newSettings
} = settings // içinden 3 bilgiyi kesip dışarı çıkardık. Geriye kalan bilgiyi de yeni bir ojbe olarak orada tut diye bilgi verdik.


// eğer değişken ismi daha önce tanımlanmadıysa:
// let {userName, password, isActive, ...newSettings}

console.log(userName2, password2, isActive2, newSettings)


// Objenin destructuring ile kaybolması

//HATALI!!!
// let settings2 =settings
// settings2.userName="Değişen bilgi"
// console.log("settins: ",settings)
// console.log("settins2: ",settings2)


// DOĞRU OLAN
let settings2 = {
    ...settings
}
settings2.userName = "Değişen bilgi"
console.log("settings: ", settings)
console.log("settings2: ", settings2)


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)


// Object kopyalama ile aynı... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)


/* 
Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

Bu şekilde bir objemiz olduğunu düşünelim;

const foo = { a: 123, b: true }

Bu obje içinde a ve b değerlerini almak istersek foo.a; ve foo.b; yazarak erişebiliriz. Ama bu değerlere erişmek istediğimizde her seferinde foo mu yazmak zorundayız? Elbette bunun da bir çözümü var, a ve b değerlerini bir lokal değişkene yazabiliriz bu sayede her seferinde foo yazmak zorunda kalmayız. Örneğin;

const foo = { a: 123, b: true }
const a = foo.a;
const b = foo.b;

Ama eğer erişmek istediğimiz değer sayısı çok fazla olsa idi gerçekten çok uğraşmak durumunda kalırdık. İşte bu noktada destructuring bizim isimizi kısaltan bir işlev görür ve ayni işlemi şu şekilde yapabiliriz;

const foo = { a: 123, b: true }
const {a,b} = foo;

Ama en önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. Yani fonksiyona parametre girerken de destructuring yapabiliriz;

const cikarma = ( { sayi1, sayi2 } ) => { 
// Bu satira dikkat
﻿return sayi1 - sayi2;
}
const sayilar = {
 sayi2: 3,
 sayi1: 5
}
cikarma(sayilar); 
// sonuc 2

Artık fonksiyon içinde devamlı sayilar.sayi1, sayilar.sayi2 diye tekrarlamamamıza gerek yok ama çıkarma fonksiyonunun parametresine dikkat edin. orada süslü parantezler {} bir objeyi temsil etmez, destructuring işlemini temsil eder. Yani çıkarma fonksiyonuna gelen sayılar objesinin içinde sayi1 ve sayi2 property'leri bulunup parçalanıp fonksiyon içinde kullanılabilir hale gelecektir. Destructuring işlemi sırasında sıralama önemsizdir, yani fonksiyonu su şekilde yazmış olsaydık da bir şey değişmeyecekti.

const cikarma = ( { sayi2, sayi1 } ) => { 
// Siralama farklireturn sayi1 - sayi2;
}

artık fonksiyon içinde obje propertyl'eri kullanılabilir.
Destructuring Yapan Fonksiyona Gönderilen Obje Eksik Property İçeriyor İse Ne Olacak?

Çıkarma işlemi için problem değil ama bölme işlemi için bu bir problem. Örneğin;

const bolme = ( { sayi1, sayi2} ) => {
 return sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8 
// dikkat sayi1 gonderdik ama sayi2 unuttuk
}
bolme(sayilar); 
// NaN yani 'Not a Number' donecektir. 

işte bu örnekte bolme fonksiyonunda güzelce destructuring yaptık, sayi1 ve sayi2'yi parçalayıp birbirine böldük. Bölme işleminde sıralama önemli ama ayni zamanda ikinci sayı 0 veya hiçbir şey içermeyen null veya undefined olursa bölme işlemi tanımsız olur. Bu durumda da fonksiyon NaN döner.

Fonksiyonu çağıran geliştiricinin böyle bir hata yapmasının önüne geçmek için fonksiyon içinde olmazsa olmaz, mutlaka değer içermesi gereken değişkenlere default yani varsayılan bir değer atayabiliriz.

const bolme = ( { sayi1, sayi2 = 1} ) => { 
// default deger atadikreturn sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8 
// yine ikinci sayiyi unuttuk
}
bolme(sayilar); 
// ama bu sefer sonuc 8, NaN degil

Burada yine ikinci sayıyı unuttuk ama bu sefer destructuring sırasında olmazsa olmaz ikinci sayıya varsayılan olarak 1 değerini atadık. Artık göndermesek bile sayi2 her zaman 1 olacaktır ve sayi1'in belirsiz bir sayıya bölünmesi hatasından kurtulmuş olacağız.
Peki Fazladan Gönderdiğimiz Bu Değerlere Ne Oluyor?

Destructuring sırasında açıkça belirmediğimiz değer fonksiyon içinde erişilemez. Örneğin burada fonksiyon parametresinde sayi2'ye varsayılan değer atamayı geç komple destructure yapmayı unuttuk.

const bolme = ( { sayi1 } ) => { 
// dikkat sayi2 unutuldureturn sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8,
 sayi2: 4
// ama sayi2 gonderdik
}
bolme(sayilar); 
// ReferenceError: sayi2 is not defined

Bu durumda ReferenceError: sayi2 is not defined yani sayı iki tanımlanmamış diye bir hata alırız, çünkü fonksiyona sayi2 göndersek bile fonksiyon içinde sayi2 ye olan erişimimizi tamamen kaybettik.

Bu durum bu örnekteki gibi iki tane değer içeren objelerde problem değil ama eğer obje birçok değer içeriyor ise bu hata çok kez yapılan bir hata. Bu noktada spreading operator imdadımıza yetişiyor. */