/* ********* Template Literals Kullanımı *********** */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username="burak"
const DOMAIN = "kodluyoruz.org"

let email=username+"@"+DOMAIN
console.log("Merhaba",username,"Sitemize Hoşgeldin.","Mail adresin: ",email)

let info=`Merhaba ${username} sitemize hoşgeldin. 
Mail adresin: ${email}

mail adresinin uzunluuğu: ${email.length}
Borcunuz: ${(2+5)*10}₺
Günün saat bilgisi: ${new Date().getHours()}

Kısa isminiz: ${username[0]}.
`
/* backticks oluşturmak için: Altgr + , */

console.log(info)   

console.log(`Benim adım: ${username}

mail adresim: ${email}`)


let a = 99;
let b= 999;

console.log(`${a} * 
${b} = 
    ${a*b}`);

/*Çıktı: 
99 * 
999 = 
    98901 */



    const ad= `Burak`
    const soyad= `TİTİZ`
    const gozrengi= `Kahverengi`
    const meslek = `FrontEnd Developer`; const dogumYili=1990
    /*  Görüldüğü gibi Template Literals'te yazdırmak için yukarıda değişkeni nasıl tanımladığımız önemli değildir.
    Değişkeni tanımlarken önemli olan kısım şudur: Aynı satırda yeni değişken tanımlarken bir öncekine noktalı virgül koymaktır (;)
    Ama aşağıdaki yazdırma kodunda yazdırırken yukarıdaki tanımladığımız gibi değil de yazdırmak isterken ne şekilde yazdığımız önemlidir. */
    console.log(`Adı: ${ad} 
        Soyad: ${soyad} 
      Göz Rengi: ${gozrengi}
                Doğum Yılı: ${dogumYili}`)
    /* Çıktı:
    Adı: Burak 
        Soyad: TİTİZ 
      Göz Rengi: Kahverengi
                Doğum Yılı: 1990
     */

    console.log(ad,soyad,gozrengi,dogumYili)
    /* Çıktı:
    Burak TİTİZ Kahverengi 1990
    */

    const kitap={
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
    }
    const bookTable=`Kitap: ${kitap.ad}
Yazar: ${kitap.yazar}
    Tarih: ${kitap.tarih}
    `
     console.log(bookTable)