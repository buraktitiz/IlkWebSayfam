        /* *********number*********** */

/* number veri türü tanımlamak */
let price=100;
let tax=.18;
let priceTax=price*tax;
let total=price+priceTax;
console.log("Fiyat: " , price, "KDV Oranı: ", tax, "KDV Tutarı: ", priceTax, "Toplam Fiyat: ", total)


let stringnumber="11"
console.log(stringnumber)
let newNumber=Number(stringnumber)
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi ",Number("111"))


/* arttırma ve azaltma işlemleri */
let counter=320;
/* counter=counter+1; // Uzun yol */
/* counter+=1; // Diğer yol */
counter++; // En kısa yol.
console.log(counter)

counter--;
counter-=1;
console.log(counter)

counter*=10;
console.log(counter)

counter/=2;
console.log(counter)

/* işlem önceliği */
console.log(2+3*10)
console.log((2+3)*10)


/* mod (kalan) alma % */

/* sayı tek mi çift mi */
console.log(3%2)
console.log(14%2)

/* 8 ürün alan koliye tüm ürünler sığıyor mu? */
console.log("Koli kalan önneği: ",18%8)

/* üs alma */
console.log(2*2*2*2)
console.log(2**4)


/* aşağı yuvarlama işlemi -> Math.floor*/
console.log("Aşağı Yuvarlama: ",Math.floor(1.7))


/* yukarı yuvarlama işlemi -> Math.ceil */
console.log("Yukarı Yuvarlarma", Math.ceil(1.3))



/* yakına yuvarlama işlemi -> Math.round */
console.log("Yakına Yuvarlama İlk örnek", Math.round(1.5))
console.log("Yakına Yuvarlama Yeni örnek", Math.round(1.4))
/* Burada 1.4 ve aşağısı olduğunda aşağı doğur yuvarlıyor. 1.5 ve üzeri oldğunda da yukarı yuvarlıyor */


