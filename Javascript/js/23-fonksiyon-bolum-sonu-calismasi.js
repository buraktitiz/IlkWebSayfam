/*  Fonksiyonlar Bölüm Sonu Çalışmaları */
/* let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
}

decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    counterDOM.innerHTML=counter
    this.id == "increase" ? counter = counter += 1 : counter = counter -= 1 // increase'e bak. Eğer increase işlemi geliyorsa counter'ı 1 artır, yoksa 1 azalt.
    
} */


/* // Bir fonksiyonu ters çevirmek
function reverseNumber(n) {
    n=n+""
    return n.split('').reverse().join('')
}
console.log(Number(reverseNumber(23456)))
console.log(String(reverseNumber("evin bahçesi")))

 */



/* //Geçilen bir dizgenin palindrom olup olmadığını kontrol etmek
Palindrom, ileriye doğru aynı şekilde geriye doğru okunan bir kelime, cümle veya dizidir
function checkPalindrom(strEntry) {
var cstr = strEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var ccount=0;
if(ccount===""){
    console.log("Nothing found")
    return false;
}
if ((cstr.length)%2===0) {
    ccount=(cstr.length)/2
} else {
    if(cstr.length===1) {
        console.log("Entry is a palindrome.")
        return true;
    } else {
        ccount=(cstr.length-1)/2
    }
}
for(i=0;i<ccount;i++) {
    if (cstr[i]!=cstr.slice(-1-i)[0]) {
        console.log("Entry is not a palindrome")
        return false;
    }
}
console.log("The entry is a palindrome")
return true;
}
checkPalindrom('madam')
checkPalindrom('nursesrun')
checkPalindrom('fox')
 */




// Bir 'JavaScript işlevi'ni parametre olarak iletmek için bir JavaScript programı
function addStudent(refreshCallback) {
    refreshCallback()
}

function refreshStudentList() {
    console.log('Hello')
}
console.log(addStudent(refreshStudentList)) 