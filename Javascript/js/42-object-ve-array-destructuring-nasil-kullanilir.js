/* //** Object ve Array Destructuring Nasıl Kullanılır */


// Object Destructuring:

let settings = {
    userName: "loremIpsum",
    password: "Badpassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}


// Obje içindeki bilgilerin tek sefferde çıkarılması
// let userName = settings.username
// console.log(userName)
// rename && destructuring yaptık
let {
    username: user,
    password,
    isActive,
    ip: serverIp,
    serverName
} = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(settings)
console.log(user)


// Obje içindeki bazı bilgilerin çıkarılması
let {
    userName: userName2,
    password: password2,
    isActive: isActive2,
    ...newSettings
} = settings // içinden 3 bilgiyi kesip dışarı çıkardık. Geriye kalan bilgiyi de yeni bir ojbe olarak orada tut diye bilgi verdik.


// eğer değişken ismi daha önce tanımlanmadıysa:
// let {userName, password, isActive, ...newSettings}

console.log(userName2, password2, isActive2, newSettings)


// Objenin destructuring ile kaybolması

//HATALI!!!
// let settings2 =settings
// settings2.userName="Değişen bilgi"
// console.log("settins: ",settings)
// console.log("settins2: ",settings2)


// DOĞRU OLAN
let settings2 = {
    ...settings
}
settings2.userName = "Değişen bilgi"
console.log("settings: ", settings)
console.log("settings2: ", settings2)


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)


// Object kopyalama ile aynı... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)