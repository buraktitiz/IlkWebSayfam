/* //** array filter kullanımı */


// 5 harften fazla olanlar
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Keyboard", "Mouse"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanıcılar
const USERS = [{
        fullName: "Ayşe Sümer",
        isActive: false
    },
    {
        fullName: "Ahmet Urgan",
        isActive: true
    },
    {
        fullName: "Asya Başar",
        isActive: true
    },
    {
        fullName: "Aksel Durmaz",
        isActive: false
    },
]

// const ACTIVE_USERS=USERS.filter(user => user.isActive===true);
// const ACTIVE_USERS = USERS.filter(user => user.isActive);
const ACTIVE_USERS = USERS.filter(user => user.isActive === false);
console.log(ACTIVE_USERS)




const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
}, {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}];
//Yaşı 30'dan büyük olanı bulam program
// const BUYUK_YAS = person.filter(item => item.age > 30)
// console.log(BUYUK_YAS)


//JavaScript dilini bileni yazan program
const JS_BILEN = person.filter(user => user.languages.includes("JavaScript"));
console.log(JS_BILEN)