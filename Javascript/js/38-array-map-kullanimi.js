/* //** array map kullanımı */

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName içinde orijinal isim kalsın,
// shortName içinde ilk harf büyük. (A.)
// newName içinde ilk harf büyük olsun
//{userName:"AYSE", shortName:"A.", newName:"Ayse"}

const NEW_USER = USERS.map(user => user.toLowerCase())
console.log(NEW_USER)

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: item,
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })


const USERS_OBJ = USERS.map(item => ({
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
}))
console.log(USERS_OBJ)


// Bir dizinin tüm elemanlarını 2 ile çarpan programı yazdıralım
const sayilar = [2, 3, 4, 5, 10]
const ikiIleCarpim = sayilar.map(item => {
    return item * 2
})
console.log(sayilar)
console.log(ikiIleCarpim)


//Maaş zam hesaplama programı
//Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map(user => {
    if (user > 3000) {
        return user * 1.15
    } else {
        return user * 1.25
    }
})
console.log(yeniMaaslar) // Array(7) [ 1375, 14950, 3125, 5175, 1875, 28750, 2500 ]