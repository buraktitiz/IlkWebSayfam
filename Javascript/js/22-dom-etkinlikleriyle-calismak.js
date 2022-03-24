/* ********* DOM Etkinlikleriyle Çalışmak */
/* https://www.w3schools.com/jsref/dom_obj_event.asp */
/* https://developer.mozilla.org/en-US/docs/web/Events */


let greeting = document.querySelector("#greeting")
//greeting.addEventListener("click", domClick) // tıklandığında bilgiler değişiyor
greeting.addEventListener("mouseover", domClick) // üzerine gelindiğinde bilgiler değişiyor


function domClick() {
    console.log("tıklandı.")
    console.log(this.innerHTML = "tıklandığı için bilgi değişti")
    //console.log(this.style.color="red") // konsola ve ekrana yazdırır ve renk değiştirir.
    //this.style.color="red" // sadece ekrana yazdırıp renk değiştirir.
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" 
    //tıklandığında renk değişiyor. tekrar tıklandığında renk yine değişiyor.

}