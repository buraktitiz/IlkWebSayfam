/* ********** Fonksiyon Submit Yönetimi ********** */

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)
function formSubmit(event) {
    event.preventDefault() // deafult işlemi engelledik.
    console.log("İşlem gerçekleşti")
}

/* Form içinde bulundurduğu form elementlerinin name'leri sayesinde değerlerini alıp bu değerlerle işlem yapmanıza olanak sağlayan bir yapıdır. */

/* GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir. */

//////////////////////* ******UYARI: GET METODU ÖNEMSİZ VERİLERDE KULLANILMALIDIR, KULLANICI ADI, ŞİFRE GİBİ BİLGİLERİN BU METHOD İLE GÖNDERİLMESİ UYGUN DEĞİLDİR. **********/


/* POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir. */



/* Giriş (Input) elementi/etiketi

Form oluşturulduktan sonra içerisine text, buton, şifre vb. tiplerinde input (giriş) elementleri oluşturulur. Bu input tipleri ile tasarımcının isteğine göre formlar tasarlanabilir. Şimdi input elementini ve en çok kullanılan önemli tiplerini inceleyelim.
Temel Input Tipleri

<input type="text">

Input(giriş) elementi text tipinde belirlenir. Yani klasik textbox kullanımı olarak ifade etsek yanlış olmaz. Örn; kullanıcı adı girişi için idealdir.

<input type="password">

Şifre tipinde veri girişi için kullanılır. Textbox’a girilen ifadeler “*” şeklinde gizlenerek gösterilir.

<input type="radio"> 

Radio button tipinde, istenilen verileri seçmek için geliştirilen giriş yöntemidir.

<input type="checkbox">

Checkbox tipinde, onay gerektiren durumlarda kullanılması için geliştirilen giriş yöntemidir.

<input type="button"> 

Klasik buton oluşturur. Varsayılan olarak herhangi bir işlem yapmaz. JavaScript vb. programlama dilleri ile birlikte işlevsel hale gelir.

<input type="submit">

Form içerisindeki elementlere girilen verileri, gönderme işlemini yapar. action ile açılacak yeni sayfaya veya mevcut sayfanın kendisine, get veya post metoduna göre değişecek şekilde veri gönderme işlevini gerçekleştirir. methot="get" kullanılmışsa action durumunda göre sayfanın adres çubuğundaki url’in sonunda, methot="post" kullanılmışsa sayfanın arka planında veriler saklanır.

<input type="reset">

Buton tipinde bir nesne oluşturur. Form içerisindeki elementlere veriler girilmiş halde iken reset’e tıklandığında görünen tüm verileri temizler ve elementleri ilk haline getirir.

<input type="color">

Renk çeşitlerini tasarımcıya sunan ve seçimini sağlayan giriş tipidir.

<input type="date"> 

Tarayıcıda tarih gösterimini sağlayan tiptir. gg.aa.yyyy varsayılan formatında görünür.

<input type="email">

Sadece e-mail girişi yapabilmek için kullanılır. E-mail formatı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="number">

Sadece sayı girişi yapabilmek için kullanılır. Sayı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="range">

Bir aralık belirtmemiz gerektiğinde, bu giriş tipini kullanmamız gerekmektedir. Dizi şeklinde veri gösterimi yapar. min="başlangıç değer" ve max="son değer" ile aralık belirlemesi yapılır. Tüm tarayıcılar tarafından desteklenmektedir.

<input type="search">

Arama yapmamızı sağlayan giriş tipidir. Aktif olacak form içerisinde, girilecek olan veri aranır. Sadece Google Chrome ve Safari tarafından desteklenmektedir.

<input type="time">

Tarayıcıda saat gösterimini sağlayan tiptir. hh.mm varsayılan formatında görünür. Element üzerinde saat belirlemesi yapılması mümkündür. İnternet Explorer ve Mozilla Firefox dışındaki tarayıcılar tarafından desteklenmektedir. */