/* //** Object - Key - Value */

//[key1:1, key2:2,key3:3]
let laptop1={
    brand:"Apple",
    model:"MacBook Pro",
    "2kg":2,
    modelName:"MacBook Pro",
    //model-name:"MacBook Pro",
    model_name:"MacBook Pro 2",
}
console.log(laptop1)

//Doğru anahtar bilgisi oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])


// Anahtar bilgisine yeni değer eklemek
laptop1.brand="Mac"
laptop1["brand"]="Mac1"
console.log(laptop1)

// Yeni bilgi eklemek
laptop1.version="10.15.7"
console.log(laptop1)

// Anahtar bilgilerine ulaşmak (keys) -> Object.keys(item)
keys=Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo =>{
    console.log(keyInfo, ":", laptop1[keyInfo])
})

// Anahtar bilgilerine ulaşmak (values) -> Object.values(item)
let values=Object.values(laptop1)
values.forEach(value =>{
    console.log(value)
})



