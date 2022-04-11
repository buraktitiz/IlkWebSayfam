/* //** Break ve Continue Kullanımı*/

const lorem_list = ['lorem','ipsum','dolor','amet','consectetur','adipisicing','elit']

// let counter = 0
// for(;counter<10;counter++) {
//     if(counter ===5){break;}
//     console.log(counter)
// }

// let counter = 0
// for(;counter<10;counter++) {
//     if(counter ===5){continue;}
//     console.log(counter)
// }

const ul_DOM = document.querySelector('#userList')
let index = 0

// for(;index<lorem_list.length;index++){
//     if(lorem_list[index]=="dolor") {break;} //dolor'a kadar yazdıracak
//     let li_DOM=document.createElement('li')
//     li_DOM.innerHTML=lorem_list[index]
//     ul_DOM.append(li_DOM)
// }

for(;index<lorem_list.length;index++){
    if(lorem_list[index]=="dolor") {continue;} // dolor'u yazdırmayıp devam edecek
    let li_DOM=document.createElement('li')
    li_DOM.innerHTML=lorem_list[index]
    ul_DOM.append(li_DOM)
}
