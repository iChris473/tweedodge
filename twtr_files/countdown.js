 
 const hour = document.querySelector(".countHour")
 const min = document.querySelector(".countMin")
 const sec = document.querySelector(".countSec")

 let inimin = 50 
 let inisec = 47 
 let inihr = 3

 const startTime = () => {

    if(inihr === 0){
        hour.innerHTML = 1
    }

    if(inimin === 0){
        inihr--
        hour.innerHTML = inihr
    }

    if(inisec === 0){
        inisec = 60
        sec.innerHTML = inisec
        inimin--
        min.innerHTML = inimin
        return
    }
    inisec--
    sec.innerHTML = inisec

 }

 setInterval(() => startTime(), 1000)