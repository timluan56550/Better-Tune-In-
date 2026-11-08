const nextFrequency = document.getElementById("nextFrequency")
const prevFrequency = document.getElementById("previousFrequency")
const frequencyInput = document.getElementById("freqInput")
const radioPower= document.getElementById("radioPower")


let currentFrequency=500;
let radio=false
let timeout=null;
const delay=750
const startDelay=1500
//resets
frequencyInput.value="OFF"
frequencyInput.disabled=true




radioPower.addEventListener("click", ()=>{
    //flips true and false every time it is clicked
    radio = !radio


    if(radio){

        radioPower.classList.add("on")
        frequencyInput.disabled =false
        updateUI(startDelay)
        console.log("Off")

    }else{
        radioPower.classList.remove("on")
        frequencyInput.value="OFF"
        frequencyInput.disabled =true

        clearTimeout(timeout)
        console.log("On")
        stopAudio()
    }
})
function updateUI(currentDelay){
// this rounds it to the nearest 10 increment. 
//stops teh radio if its off
if (!radio){
    frequencyInput.value="OFF"
    frequencyInput.disabled =true
    return
}
stopAudio()
    currentFrequency=Math.floor((currentFrequency)/10)*10

    //limit between 505 and 1505
    currentFrequency = Math.floor(Math.max(500, Math.min(1500, currentFrequency)))
    frequencyInput.value=currentFrequency +" kHz"

    clearTimeout(timeout)
    timeout=setTimeout(()=>{
    radioSignal(currentFrequency)

    }, currentDelay)
}


frequencyInput.addEventListener('change',()=>{
    //parseint makes the string into a integer
   let typed=parseInt(frequencyInput.value)
   //||= checks if it is not a number set it to 535
    typed||=500
    currentFrequency=typed
    updateUI(delay)
} )

//left arrow
prevFrequency.addEventListener('click',()=>{
    currentFrequency -= 10
updateUI(delay)
} )

//right arrow
nextFrequency.addEventListener('click',()=>{
   currentFrequency += 10
updateUI(delay)
} )