/* *********** let ve const ile değişken tanımlama ********** */

/* var ile değişlen tanımlama */
/* var serverName="api.kodluyoruz.org"
console.log(serverName) */


/* let ile değişkeni boş tanımlama */
let serverName;
console.log(serverName)


/* let ile değişkene bilgi atamak */
serverName="https://kodluyoruz.org"
console.log(serverName)


/* let ile değişkene bilgi atayarak tanımlamak: */
let password="1234";
console.log(password)

/* değişken ataması yapmadan önce kullanmaya çalışmak */

/* HATALI KULLANIM şu şekildedir */
/* console.log(fullName)
let fullName="Burak TİTİZ"
Burada let ile tanımlama yaptığımız için yukarıda olan console.log(fullName) ekrana yazdırma yapamayacak. Çünkü fullName öncesinde değil, sonrasında tanımlanmıştır. Eğer let ile değil de var ile tanımlamış olsaydık kodumuzun çıktısında herhangi bir hata almayacaktık */
let fullName="Burak TİTİZ"

/* let ile tanımlanan değişkenin içindeki bilyi değiştirme */
/* Yukarıda let fullName="Burak TİTİZ olarak tanımladığımız değişkenimiz aşağıda aynı isimdeki dğeişken  farklı bir isim aldığı için en son yazılan değişken aktif oluyor" */

fullName="Lorem Ipsum Dolor"
console.log(fullName)

/* birleştirme veya ekleme işlemi de yapabiliriz */
fullName+"Yeni eklenen bilgi"
console.log(fullName + " Test bilgisi")

fullName=fullName+" Yeni Bilgi"
fullName=" 2. Bilgi: " + fullName

fullName="Sifirlandi"
fullName+=" ve Yeni Bilgi Eklendi"
console.log(fullName)

/* const ile değişken boş tanımalaya çalışmak */
/* const serverPassword; //Sadece değişken tanımlandı. Ama içi boş. */
/* Yukarıdaki yöntemi yapamıyoruz. Şimdi yapabileceğimiz yöntemi tanımlamaya başlayalım */




/* const ile değişken tanımlamak */
const SERVER_PASSWORD="fşnkltrksidföv3544q24"
console.log(SERVER_PASSWORD)

/* SERVER_PASSWORD="1234"
console.log(SERVER_PASSWORD)
Burada ekrana 1234 yazdıramayacağız. Çünkü const ile üst tarafta SERVER_PASSWORD'ü sabitledik. Eğer sabitlemek istemiyorsak ve sonrasında değişkenin değerini değiştirmek istiyorsak let kullanmalıyız. 
Fakat değiştirilemeyecek bilgiler ekleyeceksek (pi sayısı, kullanıcı kimlik numarası vb. gibi) const eklemeliyiz.

const: 1 kez tanımlanır. Ve sonrasında asla değiştirilemez. Çünkü amaç budur (değiştirmemek) */

