/* **********FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi ********* */

/*
1: Formu seç
2: Input Bilgisini Bul
3: Form içindeki bilgiyi sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar 
 */

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    addItem(USER_NAME.value, SCORE.value);
}

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