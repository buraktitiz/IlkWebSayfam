/* //** fetch api ile çalışmak */


// JSON dosyadan veri çektik
fetch("data/settings.json").then(
    response => {
        return response.json();
    }
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})


let userListDOM = document.querySelector("#userList");
// API üzerinden verileri çektik ve sayfada gösterdik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})


// API üzerinden çekilen veriyi çektik ve konsola yazdırdık
// GET isteği yapacağız.
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) //parse json data
    .then(function (todos) {
        todos.forEach((todo) => {
            console.log(todo.title); //Başlıkları console' a yazdırma
        });
    });



// ** Uygulama1
// API dokümanında Resources bölümünde belirtilen kaynaklardan /users uzantısındaki verileri alıp console’a yazdıracak kodu yazın.
fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()).then(
    (json) => console.log(json)).catch(
    (err) => console.log(err)
)


// ** Uygulama2
// Json Placeholder API servisinin /comments uzantısında mevcut verilerden, her bir comment içerisindeki email’leri console’a yazdıracak kodu yazın.
fetch("https://jsonplaceholder.typicode.com/comments").then(
    (response) => response.json()).then(
    (json) => json.forEach((item) => console.log(item.email))).catch(
    (err) => console.log(err)
)