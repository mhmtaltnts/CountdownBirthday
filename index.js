const countdownDisplay = document.getElementById("countdown-display")
const countdownHour = document.getElementById("countdown-hour")
const countdownMinute = document.getElementById("countdown-minute")

function renderCountdown(){
    const birthday = new Date("12/07/2021")
    const today = new Date().getTime()
    let difference = today-birthday
    let days =Math.floor(Math.abs( difference/(1000*3600*24)))
    let hours = Math.floor(Math.abs((difference % (1000*3600*24))/(1000*3600)))
    let minutes = Math.floor(Math.abs(difference % (1000*3600)/(1000*60)))
    countdownDisplay.innerText = `${days} days`
    countdownHour.innerText = `${hours} hours`
    countdownMinute.innerText = `${minutes} minutes`
}

renderCountdown()