/* //** Array forEach Metodu */

const PRODUCTS = ["Laptop", "Phone", "Desktop PC", "Speaker", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach((product,index,array) =>array[index]=product+"111")
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`) // toUpperCase

console.log(PRODUCTS)


const userListDOM = document.querySelector('#userList');
PRODUCTS.forEach((item) => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})



// Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.
// const numbers=[4,11,9]
// const newArray=[]

// numbers.forEach(function(numbers) {
//     newArray.push(numbers*3)
// })
// console.log(newArray)




//Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array 
// const numbers = [12, 24, 36]
// const newArray = []
// numbers.forEach(number => {
//     newArray.push(number + 2)
// })
// console.log(newArray)