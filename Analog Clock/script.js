setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
/*the above code converts the current hours, mins & secs to ratios*/

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
        /*this function is made to convert the ratio value obtained in setClock() function to degrees which is then directy linked to hour, minute and second hands of th clock so they rotate to the appropriate values*/ 

    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()