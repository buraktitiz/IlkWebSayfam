/* *********** Koşullarla Çalışmak ********** */

/* let username=prompt("Kullanıcı Adınızı Giriniz: ") */

/* eğer kullanıcı bilgisi varsa ekrana ismini yazdır */
/* eger(username.length> {console.log(username)}) değilse { console.log("bilgi yok")} */
/* if(username.length> {console.log(username)}) else { console.log("bilgi yok")} */
/* if(username)
{
    console.log(`Kullanıcı Bilginiz: ", ${username}`)
}
else {
    console.log("bilgi yok")
} */


/* //İki sayıdan büyük olanı bulalım 

var x=5;
var y=6;

if (x > y) {
    console.log(x + " sayisi " + y + " sayısından küçüktür.");
} else {
    console.log(y + " sayisi " + " " + x + " sayısından büyüktür.");
}
 */


/* // Vize - Final Not ortalamasını Kullanıcıdan alarak Bulma 

let vize=prompt("Vize Notunuzu Girin: ");
let final =prompt("Final notunuzu Girin: ");

let ortalama=((vize*0.4)+(final*0.6));

if(ortalama<31)
{
    console.log(`Kaldınız,${ortalama}`)
}
else if(ortalama>30 &&ortalama<50)
{
    console.log(`Koşullu Geçtiniz,${ortalama}`)
}
else if(ortalama>50 &&ortalama<85)
{
    console.log(`Geçtiniz,${ortalama}`)
}
else if(ortalama>84 && ortalama<=100)
{
    console.log(`En yüksek ortalama,${ortalama}`)
} */


/* Vücut kitle endeksi hesaplama programı 

let kilo = prompt("Kilonuzu giriniz: ")
let boy = prompt("Boyunuzu girin: ")

let vki = (kilo / (boy * boy));
if (vki < 18.5) console.log(`Vücut kitle endeksiniz: `,
    `${vki}, değerleriniz düşüktür`);
else if (vki >= 18.5 && vki <= 24.9) console.log(`Vücut kitle endeksiniz: `,
    `${vki}, değerleriniz normaldir.`);
else if (vki >= 25 && vki <= 29.9) console.log(`Vücut kitle endeksiniz: `,
    `${vki}, değerleriniz yüksektir`);
    else if (vki >= 30) console.log(`Vücut kitle endeksiniz: `,
    `${vki}, değerleriniz aşırı yüksektir`);
else {
    console.log("Girdiğiniz değerleri kontrol ediniz")
}
console.log(vki);
*/



/* Bilgisayar tarafından 10'a kadar tutturulmuş bir sayıyı tahmin etme programı */

let randomSayi=(Math.floor(Math.random()*10)+1) // 1 ile 10 arasında sayı üretir.
/* (Math.floor(Math.random()*10)) yapmış olsaydık 0'dan 9'a kadar sayı üretmiş olacaktı.
Bu kodumuzda sayıları üretmeye 0'dan başlıyor. Ve 10 tane üretilsin demiş oluyoruz.
ama biz 10+1 yaptığımız kodda 1'den başlayıp 10 tane sayı üret diyoruz. 
Yani en üstteki kodumuzda 1-10 arasını üretiyoruz. */

var tahmin=prompt("Rastgele bir sayı giriniz: ")
if(tahmin==randomSayi&&tahmin!=null)
{
   console.log(`Tebrikler. Bildiniz!`,`${randomSayi}`) 
}
else {
    console.log(`Girdiğiniz Sayı: `,`${tahmin}`,`${"Bilgisayarın tuttuğu sayı: "}`,`${randomSayi}`,`Tekrar Deneyiniz!`)
}