/* //** array - dizilerle çalışmak */


/* Array oluşturmak */
let isActive = false
let domain = "kodluyoruz"
let items = [17, 23, 310, false, domain] // **en yukarıya yazmış olsaydık üstteki isActive ve domain bilgisini alamayacaktı. Çünkü items tanımlamasından önce değişkenler tanımlanmalıdır. Yazdırılacak kısım en sona tanımlanmalıdır.

// items +=[1,2,3]
console.log(items)

let emptyArray = [] //boş liste

/* Array içindeki eleman sayısını öğrenmek */
console.log(items.length)
// document.querySelector('#info').innerHTML=items.length



/* Array içindeki ilk elemanın çağırılması */
console.log(items[0]) // dizinin ilk elemanına ulaştı



/* Array içindeki ortasındaki elemanın çağırılması */
console.log("ortadaki eleman: ", items[Math.floor(items.length / 2)])



/* Array içindeki son elemanın çağırılması */
console.log(items[items.length - 1])



/* değişken içindeki bilginin Array olup olmadığının kontrol edilmesi */
console.log(typeof (items)) // items'ın hangi tipte olduğunu belirtiyor ->Çıktı şu şekilde: object


console.log(Array.isArray(items))



// hangileri isArray-> True verir?
console.log("[]: ", Array.isArray([])) // içinde array olup olmadığını kontrol ediyor
console.log("1: ", Array.isArray(1))
console.log("true: ", Array.isArray(true))


let gunler = ['pazartesi', 'salı', 'çarşamba']
gunler = ['perşembe', 'cuma', 'cumartesi', 'pazar']
console.log(gunler) //** burada  ['perşembe','cuma','cumartesi','pazar'] çıktısını alacağız Çünkü let kullanarak oluşturulan bir array yeniden tanımlanabilir.


// ** Fakat şu şekilde tanımlama yapsaydık aynı sonucu alamayacaktık:
const gunler1 = ['pazartesi', 'salı', 'çarşamba'] 
gunler1= ['perşembe', 'cuma', 'cumartesi', 'pazar']
console.log(gunler1) // ** sebebi de const ile sabitlediğimiz için.