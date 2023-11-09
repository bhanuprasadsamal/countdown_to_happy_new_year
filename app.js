const newYear = "1/1/2024";

const dyaslf = document.querySelector(".day");
const hourlf = document.querySelector(".hour");
const minutelf = document.querySelector(".minute");
const secondslf = document.querySelector(".seconds");

function timeCountDown(){
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dyaslf.textContent = formatTime(days);
    hourlf.textContent = formatTime(hours);
    minutelf.textContent = formatTime(minutes);
    secondslf.textContent = formatTime(seconds);

    
}

function formatTime(time){
    return time > 10 ? time: `0${time}`;
}

timeCountDown()
setInterval(timeCountDown,1000);