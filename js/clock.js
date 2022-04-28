let username = prompt("Lütfen adınızı giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML= `${username.toUpperCase()}`


function ShowTime(){
    let date = new Date().toLocaleString();
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML=`${date}` 
}


ShowTime();
setInterval("ShowTime()",1000)