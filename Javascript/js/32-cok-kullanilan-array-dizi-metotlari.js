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


//**Array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')



//**Array Kopyalamak -> slice, [...ES6]


//**Array içerisindeki bilgiyi String'e çevirmek -> toString, join


//**İki Array bilgisini birleştirmek -> [...ES6, ...ES6]


//**İstediğimiz Index bilgisine öge eklemek -> splice(index,0,value)

