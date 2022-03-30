/* **********FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi ********* */

/*
1: Formu seç
2: Input Bilgisini Bul
3: Form içindeki bilgiyi sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar 
 */

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);
/* Öncelikle index.html'de bulunan HTML dosyasından, form seçimi yapabilmek için gerekli id'yi alıyoruz. Burada form elementinin id'si userForm'da görüldüğü üzere userForm id'si querySelector fonksiyonu ile alınmıştır. Daha sonrasında addEventListener fonksiyonu ile "submit" olayı gerçekleştiğinde bu html elementinde ne olması gerektiği ifade edilmiştir. Submit olduğunda formHandler fonksiyonu çağırılıyor */
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) // gönderdikten sonra sıfırladık
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction("Başlık bilgisi bulunamadı.", "Eksik bilgi girdiniz", "danger")
    }
}
/* formHandler fonksiyonu event parametresini alıyor. Daha sonrasında event.preventDefault() fonksiyonu ile submit anında sayfanın yenilenmesini engellemiş oluyoruz. Hemen sonraki satırlarda html dosyasından username ve score id'lerini querySelector ile çağırıp bunların değerlerini listeye eklemek için görülen addItem adlı fonksiyona yolluyoruz. */




let userListDOM = document.querySelector('#userList')
const addItem = (username, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${username} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}