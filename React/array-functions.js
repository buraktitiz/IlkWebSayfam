const users = [{
        name: "Mehmet",
        age: 20,
    },
    {
        name: "Mehmet",
        age: 35,
    },
    {
        name: "Ahmet",
        age: 29,
    },
    {
        name: "Sevilay",
        age: 23,
    }
]

/* 
push
map
find
filter
some
every
includes
*/

// push - listenin sonuna yeni veri eklemek
// users.push("Ayşe")
// users.push("Fatma")
// console.log(users);


// map - Array içinde tek tek dönüyor. Eğer o veri yoksa undefined döner
// users.map((item) => {
//     console.log(item);
// });

// find - Array içindeki verilen koşullarda arama işlemi yapar ve ilk sonucu döner
// const result = users.find(item => item.name === "Mehmet" && item.age > 18);
// console.log(result);

// filter - filtreleme yapar
//const filtered=users.filter(item => item.name === "Mehmet" && item.age<25)
//veya item yazmak yerine name ve age'i tanımlayıp direkt olarak yazabiliriz.
// const filtered = users.filter(({name,age}) => name === "Mehmet" && age < 25)
// console.log(filtered);

// some - Array in içindeki verdiğimiz elemanlardan herhangi biri uyuyorsa true ver. yoksa false ver
// const some=users.some(({name,age}) =>name ==="Mehmet"&& age===20)
// console.log(some);

// every - Arrayin içindeki bütün elemanların şarta uymasını bekliyor
// const every = users.every((item) => item.age > 15)
// console.log(every);

// includes - içinde geçip geçmediğini kontrol eder
// const meyveler=["elma","armut","muz"]
// const isIncluded =meyveler.includes("portakal")
// console.log(isIncluded);