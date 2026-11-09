const nextFrequency = document.getElementById("nextFrequency")
const prevFrequency = document.getElementById("previousFrequency")
const frequencyInput = document.getElementById("freqInput")
const radioPower= document.getElementById("radioPower")
const redEffect= document.getElementById("redEffect")
const damageSound=new Audio("audio/damage.mp3")
const powerSound=new Audio("audio/power.mp3")
const turnSound=new Audio("audio/turn.mp3")
turnSound.volume=0.02
damageSound.volume=0.1

const evidenceSounds={
    "Whispering": new Audio("audio/whispering.mp3"),
    "Loud Static": new Audio("audio/static.mp3"),
    "Breathing": new Audio("audio/breathing.mp3"),
    "Heart Beat": new Audio("audio/heartbeat.wav"),
    "Screams": new Audio("audio/scream.mp3"),
    "Wind": new Audio("audio/wind.mp3"),
    "Tapping": new Audio("audio/tapping.mp3")
}
//for each object
Object.values(evidenceSounds).forEach(sound => {
    sound.loop = true;
    sound.volume = 0.05;
    if (sound === evidenceSounds["Whispering"]) {  

    } 
    if (sound === evidenceSounds["Loud Static"]) {
        sound.volume = 0.1;
    }
    if (sound === evidenceSounds["Breathing"]) {
        sound.volume = 0.1;
    }
    if (sound === evidenceSounds["Heart Beat"]) {
        sound.volume = 0.1;
    }
    if (sound === evidenceSounds["Screams"]) {
        sound.volume = 0.1;
    }
    if (sound === evidenceSounds["Wind"]) {
        sound.volume = 0.1;
    }
    if (sound === evidenceSounds["Tapping"]) {
        sound.volume = 0.1;
    }
});


let currentFrequency=500;
let radio=false
let timeout=null;
const delay=750
const startDelay=1500
let drain=null
let currentHazards=[]
//resets
frequencyInput.value="OFF"
frequencyInput.disabled=true
function redEffectFrequency(){
    currentHazards=[]
currentAnomaly.redEffect.forEach((band)=>{
    const [minimum,maximum]=band.split("-");
    const min=parseInt(minimum)
    const max=parseInt(maximum)
    const steps=(max-min)/10
    const random=Math.floor(Math.random()*(steps+1))
    const harzardFrequency=min+(random*10)
    console.log("Red Effect Frequency: "+harzardFrequency)
    currentHazards.push(harzardFrequency)
})}
function radioSignal(frequency){
         stopAudio()

    //checks if the current frequency is in the red effect range
    const isHazard=currentHazards.includes(frequency)
    if (isHazard){
        redEffect.classList.remove("hidden")
        startDamage()
        
        return null;
    }
    redEffect.classList.add("hidden")
                stopDamage()
    //true if target frequency mathcse frequency
    const detected=currentEvidence.find(
        function(signal){
            return signal.targetFrequency===frequency;
        }
    )
   

    if(detected){
console.log("signal")
const soundToPlay=evidenceSounds[detected.clue]
if (soundToPlay){
currentPlayingSound=soundToPlay
currentPlayingSound.currentTime=0
currentPlayingSound.play()         
} 
return detected
    }else{
        console.log("static")

    static.play()
        
        return null
    }
}
function startDamage(){
    if (hazardInterval){
        return
    }
    let x=3
    hazardInterval=setInterval(()=>{
        HP=Math.max(0,HP-1)
        updateBarUI()
        if(x<3){
            x++
        }else{
            x=0
            damageSound.currentTime=0
            damageSound.play()
        }
        
    if (HP<=0){
        stopDamage()
        endRound(true, circledMonster)
    }
},200)
}
function stopDamage(){
    clearInterval(hazardInterval)
    hazardInterval=null
}
radioPower.addEventListener("click", ()=>{
    //flips true and false every time it is clicked
    powerSound.currentTime=0
    powerSound.play()
    radio = !radio


    if(radio){

        radioPower.classList.add("on")
        frequencyInput.disabled =false
        updateUI(startDelay)
        console.log("On")
        drainBattery()

    }else{
        stopDamage()
        radioPower.classList.remove("on")
        frequencyInput.value="OFF"
        frequencyInput.disabled =true

        clearTimeout(timeout)
        console.log("Off")
        stopAudio()
        redEffect.classList.add("hidden")
    }
})

function drainBattery(){
clearInterval(drain)
drain=null
drain=setInterval(()=>{
        //if radio is on and battery is greater that 0
        if(radio && battery>0){
            battery=Math.max(0,battery-0.7)
        }
        updateBarUI()
    
if(battery<=0){
    powerSound.currentTime=0
    powerSound.play()
      radioPower.classList.remove("on")
        frequencyInput.value="OFF"
        frequencyInput.disabled =true

        clearTimeout(timeout)
        console.log("Off")
        stopAudio()
}
    },1000
)
}
function updateUI(currentDelay){
// this rounds it to the nearest 10 increment. 
//stops teh radio if its off
if (!radio){
    frequencyInput.value="OFF"
    frequencyInput.disabled =true
    return
}
stopAudio()
redEffect.classList.add("hidden")
    currentFrequency=Math.floor((currentFrequency)/10)*10

    //limit between 505 and 1505
    currentFrequency = Math.floor(Math.max(500, Math.min(1500, currentFrequency)))
    frequencyInput.value=currentFrequency +" kHz"
stopDamage()
    clearTimeout(timeout)
    timeout=setTimeout(()=>{
    radioSignal(currentFrequency)
    
    }, currentDelay)
}


frequencyInput.addEventListener('change',()=>{
    turnSound.currentTime=0
    turnSound.play()
    //parseint makes the string into a integer
   let typed=parseInt(frequencyInput.value)
   //||= checks if it is not a number set it to 535
    typed||=500
    currentFrequency=typed
    updateUI(delay)
} )

//left arrow
prevFrequency.addEventListener('click',()=>{
    turnSound.currentTime=0
    turnSound.play()
    currentFrequency -= 10
updateUI(delay)
} )

//right arrow
nextFrequency.addEventListener('click',()=>{
    turnSound.currentTime=0
    turnSound.play()
   currentFrequency += 10
updateUI(delay)
} )