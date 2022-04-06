/* //Array yapısına öge eklemek ve Array içerisinden istenilen ögenin çıkarılması */

let items = [10,20,30,40];
console.log("items - ilk hali:  ",items);


//**Array: sona öge/eleman eklemek ->push
items.push(50)
console.log("50",items);


//**Array: sona öge/eleman eklemek ->unshift
items.unshift(5)
console.log("5",items);


//**Array: sondaki ögeyi çıkarmak -> pop 
let lastName=items.pop() // son elemanı lastName içine ekledik
console.log("lastName: ",lastName,"items: ",items);


//**Array: sondaki ögeyi çıkarmak -> shift
let firstName=items.shift() // ilk elemanı firstName içine ekledik
console.log("firstName: ",firstName,"items: ",items);



