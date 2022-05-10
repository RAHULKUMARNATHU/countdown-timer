const daysE1 =  document.getElementById('days');
const hoursE1 =  document.getElementById('hours');
const minsE1 =  document.getElementById('mins');
const secondsE1 =  document.getElementById('seconds');


const myLove = '12 may 2022';


function countdown(){

    const myLoves = new Date(myLove);
    const currentDate = new Date(); 
    const totalSeconds =(myLoves - currentDate)/1000
    
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 ) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds ) % 60
 
    
    daysE1.innerHTML =days
    hoursE1.innerHTML = formatTime(hours)   
    minsE1.innerHTML = formatTime(mins)   
    secondsE1.innerHTML = formatTime(seconds)  
    
    // console.log (days , hours ,minutes ,seconds)
}

function formatTime(time){
    return time < 10 ? `0$(time)` : time ;
}
// Intial call
setInterval(countdown,1000);

countdown();