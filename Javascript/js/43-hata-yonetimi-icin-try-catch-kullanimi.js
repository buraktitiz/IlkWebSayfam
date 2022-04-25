/* //** Hata Yönetimi İçin try-catch Kullanımı */

// try...catch ifadesini basitçe ifade edersek; Herhangi bir iş yaparken bir hatayla karşılaşılma durumunun ele alınması anlamına gelmektedir.

// try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.

// Basit bir try catch bloğu şu şekildedir.

/* try {
    //çalıştırılacak kodlar
} catch (error) {
    //hata yakalandığı zaman çalışacak kodlar    
} finally {
    //try tamamlandıktan sonra gata olsa a olmasa da çalışacak kodlar 
}
 */

// catch bloğunda yazılmış olan hata değişkeni oluşacak istisnayı taşıyacak olan değişken adıdır. Buraya herhangi bir isim verilebilir fakat yaygın olarak exceptionın ilk harfi olan e, err gibi ifadelerle isimlendirilir

/* Throw İle İstisnalar Oluşturma

Normalde kod çalışırken bir hata oluştuğunda, JavaScript durur ve bir hata mesajı oluşturur. Bu duruma JavaScript bir istisna atar (bir hata atar) olarak adlandırılır.

JavaScript aslında iki özelliğe sahip bir Error nesnesi oluşturacaktır: isim ve mesaj.

throw ifadesi bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak throw ile bir istisna (hata) atılabilir.

throw "Çok büyük";    // Çok büyük hatası at, oluştur
throw 500;            // 500 numarası hatasını at, oluştur

Sonuç olarak throw ile birlikte try...catch ifadesini kullanırsak, program akışını kontrol edebilir ve özel hata mesajları oluşturabiliriz.

Basit bir örnekle daha iyi anlamaya çalışalım.

<input type="text" id="dogumTarihi" />
<button onclick="valid()">Gönder</button>

Yukarıdaki gibi ‘dogumTarihi’ adında bir input nesnesi oluşturalım ve butona tıkladığımızda eğer ‘dogumTarihi’ adındaki input nesnemize bir şey girilmediyse throw ifadesiyle kolay bir şekilde exception oluşturabiliriz.

function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}
 */





/* let products;

try {
    products.forEach(item => console.log(item));
} catch (error){
    console.log("error", error);
}
console.log("hata yönetimi düzgün çalışıyor")

let info="kodluyoruz"
console.log(info) */