/*  ************ Fonksiyonlar Nedir? Neden ihtiyaç duyarız? */
/* İlk Fonksiyonumuzu Tanımlamak: */

function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}

hello() // Çalıştırmak için hello'yu () ile tanımlayarak çalıştırıyoruz
// Ayrıca yukarıda hellowworld'ü hello'nun içine tanımladık. Orada tanımlı olduğundan dolayı hello çağrıldığında hem Merhaba hem de Hello World yazacaktır.


/* 

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner. Ama konsola yazdırılmalıdır

function carp(sayi1, sayi2) {
sayi1 * sayi2; // return tanımlı değil
};

result=carp(10,20); // undefined 
console.log(topla(10,40)) // 50

 */




/*
var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

/* var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz 
console.log(ekle(10,20)) // 30 
console.log(topla(10,80)) // 90
  */


/* 
function mesajVer() {
    alert( 'Herkese Merhabalar!' );
    }
    mesajVer()
     */



/* 
   const carpim = (sayi1, sayi2) => sayi1 * sayi2;

   // Daha uzun hali ise;
  // const carpim = function(sayi1,sayi2){
   // return sayi1 * sayi2;
  // } 
   
   console.log(carpim(3, 5)); 
 */



/* 
    // bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
/* function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log(pow(3,4)) */



/*   
alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8 */



/* 
//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
  }
  console.log(pow(3,4)) */

/* faktöriyel yapalım
function factoriel(x) {
    return x == 1 ? x : x * factoriel(x-1);
}
console.log(factoriel(6)) //720
 */



/* 
{
    let message = "Merhabalar"
    console.log(message)
}
console.log(message) // kod bloğu dışında olduğu için bunu yazdırmayacak.
 */



/* 
// If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.
if(true) {
    let message='Merhabalar.'
    console.log(message)
}
console.log(message) // od bloğu dışında olduğu için bunu yazdırmayacak.
 */


/* 
function stringFormat(str) {
    {
        let part1=str.slice(0,3)
        let part2=str.slice(3)
        str=part1.toUpperCase()+part2
    }
    // part1 ve part2 kullanılamaz. 
    // bir koşula bağlı return edelim. basit olması açısından sadece true yazalım.
    if(true) {
        return str
    }
    return str.slice(4)
}
 */



/* 
function makeCounter() {
    let count = 0;
  
    return function () {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert(counter()); // 0
  alert(counter()); // 1
  alert(counter()); // 2
   */