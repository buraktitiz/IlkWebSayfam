/* //**Çok Kullanılan Array(Dizi) Metotlaro ve Array içinde Array */

let items = [1,2,3,4,5]


//**Array içinde Array(Dizi)
let femaleUsers=["Ayşe","Hülya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length) // burada 7 tane öge olduğunu gösterir. Çünkü femaleUsers ve maleUsers değişkenlerini birer öge, items'ı da 5 elemanlı öge olarak konsolda gösterir. Bu saye 5+1+1=7 ögeli bir items.length'imiz olur.


console.log(items[0].length) // Array içindeki istediğimiz Array'in length bilgisini aldık. Yani 3.(Ayşe,Hülya, Merve)
console.log(items[0][0]) // Ayşe bilgisine ulaştık


//**Array içerisinden öge ayırmak ->splice(pos,item?)
let newItems=items.splice(1,5)
console.log("newItems: ",newItems)
console.log("items: ",items)


//**Array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
// console.log(items)

items.push("ipsum")
// console.log(items)
console.log(items[items.indexOf("ipsum")]) // ipsum'u index içinde buluyoruz
console.log(items.indexOf("ipsum")) //ipsum'un kaçıncı index'te olduğunu buluyoruz

//**Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ögeyi çıkarttık
console.log("copyItems: ",copyItems)
console.log("items: ",items)

console.log("kopyalandıktan sonraki hali: ")
copyItems=items.slice()
copyItems.pop() 
console.log("copyItems: ",copyItems)
console.log("items: ",items)


//**İki Array bilgisini birleştirmek -> [...ES6, ...ES6]
let es6Items=[...items] // es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)


let allUsers =[...femaleUsers,...maleUsers] // es birden fazla array yapısını birleştirmek
console.log(allUsers)


//**Array içerisindeki bilgiyi String'e çevirmek -> toString, join





//**İstediğimiz Index bilgisine öge eklemek -> splice(index,0,value)

