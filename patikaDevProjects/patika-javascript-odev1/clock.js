let myDate=document.querySelector("#myClock")
let myName=document.querySelector("#myName")

document.addEventListener("DOMContentLoaded",askName)

function askName(){
    let name= prompt("Adın ne?")
    setInterval(doDate,1000)
    callName(name)
}

function doDate(){
    let days = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    let months = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");

    let now = new Date();

    myDate.innerHTML=`${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${now.getSeconds()}`
    console.log(days[now.getDay()])
}

function callName(name){
    myName.innerText=name
    console.log(name)
}

