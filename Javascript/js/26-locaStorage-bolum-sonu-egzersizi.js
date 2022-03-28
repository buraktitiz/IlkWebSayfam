/* Local Storage Bölüm Sonu Egzersizi */

let counter = 0
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
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML=counter
}