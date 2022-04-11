/* Local Storage İşlemleri */

/* let user={userName: "buraktitiz", isActive:true}
console.log(user)
localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo=localStorage.getItem('userInfo') // Bilgiyi al
userInfo=JSON.parse(userInfo)
console.log(userInfo) */

//Daha komplex bir yapıda getirmek istediğimizde önce string'e çevirmemiz lazım
//String'e çevirmek için de JSON ile beraber gelen stringify özelliğini kullanıyoruz
//String'e çevirdiğimiz yapıyı da parse edip geri alabiliyoruz.



/* localStorage.setItem('number',11)
localStorage.getItem('number')



let items=[1,2,3,user]
localStorage.setItem('newItem',items)
localStorage.setItem('newItem',JSON.stringify(items))
localStorage.getItem('newItem')
JSON.parse(localStorage.getItem('newItem')) */