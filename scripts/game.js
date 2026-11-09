const hpBar=document.getElementById("hpBar")
const maxHpElement=document.getElementById("maxHp")
const batteryBar=document.getElementById("batteryBar")
const maxBattery=document.getElementById("maxBattery")
const clockDisplay =document.getElementById("clock")
const coffee=document.getElementById("coffee")





let currentAnomaly=null;
let currentEvidence=[]
let HP=100;
const maxHP=100;
let battery=100;
let shiftHour=10;
let shiftMinute=0
let am=false;
let clockInterval=null
let shiftEnded=false;
let hazardInterval=null
let currentPlayingSound=null;

//audio
const static=new Audio("audio/static.mp3")
static.loop=true
static.volume=0.01


const drinkSound=new Audio("audio/drink.mp3")
drinkSound.volume=0.2

coffee.addEventListener("click",()=>{
    if(HP<maxHP){
        drinkSound.currentTime=0
        drinkSound.play()
        HP=Math.min(maxHP,HP+40)
        coffee.classList.add("hidden")
        updateBarUI()
    }
})
function startShift(){
clearInterval(clockInterval)
clockInterval=setInterval(()=>{
    if(shiftEnded){
        return;
    }
    //convert time
    shiftMinute+=1
    if(shiftMinute>=60){
        shiftMinute=0
        shiftHour+=1
        if(shiftHour===12&&!am){
            am=true;
        }else if (shiftHour>12){
            shiftHour=1
        }
    }

    updateClockUI()
    if(am&&shiftHour===6){
        endRound(false, circledMonster)
    }
},1000)
redEffectFrequency()
}
function updateClockUI(){
    let minute=0
if (shiftMinute<10){
    minute="0"+shiftMinute
}else{
    minute=shiftMinute

}
let period=""
if (am){
    period="AM"
}else{
    period="PM"
}
clockDisplay.innerText=shiftHour+":"+minute+" "+period
}

function endLock(){
    shiftEnded=true
    clearInterval(clockInterval);
      radioPower.classList.remove("on")
        frequencyInput.value="OFF"
        frequencyInput.disabled =true

        clearTimeout(timeout)
        stopAudio()
}
function updateBarUI(){
    //prevetns negative
    //hp stuff
    HP=Math.max(HP,0)
    const percent=(HP/maxHP)*100;

    hpBar.style.width=percent+"%"

    const health= Math.round(HP)+"/"+maxHP

    maxHpElement.innerText=health

    //battery stuff
    battery=Math.max(battery,0)
    batteryBar.style.width=battery+"%"

    const max =Math.round(battery)+"%"
    maxBattery.innerText=max


    if(HP<=0){
        endRound(true, circledMonster)
    }
}


//FREQUENCY STUFF
function getRandomFrequency(range){
    //example 500-700 gets 500 and 700, output is a STRING
    const [minimum, maximum]=range.split("-")
    const min= parseInt(minimum)
    const max= parseInt(maximum)

    const totalSteps=(max-min)/10
    const random=Math.floor(Math.random()*(totalSteps+1))
    const total=min+(random*10)
    return total
}

function startRound(){
    const randomIndex =Math.floor(Math.random()*anomalies.length)
    currentAnomaly=anomalies[randomIndex]
    currentEvidence=[]
    //for each item in the array of teh evidence property
    currentAnomaly.evidence.forEach((evidenceClue)=>{
    const [clue, frequency]=evidenceClue.split("/")
    const targetFrequency= getRandomFrequency(frequency)

    currentEvidence.push({
        clue: clue,
        frequency: frequency,
        targetFrequency: targetFrequency
    })
    })
    console.log("Anomaly: ", currentAnomaly.name)
    console.log("Evidence: ", currentEvidence)

}

function stopAudio(){
    static.pause()
    static.currentTime=0
    if(currentPlayingSound){
        currentPlayingSound.pause()
        currentPlayingSound.currentTime=0
        currentPlayingSound=null
    }
}


//starting game fucnotins
//this one picks an anomoly
startRound()
//this one updates teh ui
updateBarUI()
//this one starts the timer
startShift()