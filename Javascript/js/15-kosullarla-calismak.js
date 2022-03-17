/* *********** Koşullarla Çalışmak ********** */

let username=prompt("Kullanıcı Adınızı Giriniz: ")

/* eğer kullanıcı bilgisi varsa ekrana ismini yazdır */
/* eger(username.length> {console.log(username)}) değilse { console.log("bilgi yok")} */ 
/* if(username.length> {console.log(username)}) else { console.log("bilgi yok")} */
if(username)
{
    console.log(`Kullanıcı Bilginiz: ", ${username}`)
}
else {
    console.log("bilgi yok")
}