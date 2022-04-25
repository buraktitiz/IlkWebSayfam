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
// API üzerinden verileri çektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})