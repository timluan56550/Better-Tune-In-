const hpBar=document.getElementById("hpBar")
const maxHpElement=document.getElementById("maxHp")
const batteryBar=document.getElementById("batteryBar")
const maxBattery=document.getElementById("maxBattery")







let currentAnomaly=null;
let currentEvidence=[]
let HP=100;
const maxHP=100;
let battery=100;







//audio
const static=new Audio("static.mp3")
static.loop=true

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
        // endRound(death)
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
}
function radioSignal(frequency){
    stopAudio()
    //true if target frequency mathcse frequency
    const detected=currentEvidence.find(
        function(signal){
            return signal.targetFrequency===frequency;
        }
    )
   

    if(detected){
console.log("signal")
return detected
    }else{
        console.log("static")
    static.play()
        
        return null
    }
}
startRound()