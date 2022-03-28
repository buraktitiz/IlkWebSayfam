/* ********** Fonksiyon Submit Yönetimi ********** */

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)
function formSubmit(event) {
    event.preventDefault() // deafult işlemi engelledik.
    console.log("İşlem gerçekleşti")
}