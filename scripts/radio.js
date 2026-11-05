const nextFrequency = document.getElementById("nextFrequency")
const prevFrequency = document.getElementById("previousFrequency")
const frequencyInput = document.getElementById("freqInput")
const frequencyNumber = document.getElementById("frequencyNumber")

let currentFrequency=505;

function updateUI(){
    currentFrequency = Math.floor(Math.max(505, Math.min(1505, currentFrequency)))
    frequencyInput.value=currentFrequency
    frequencyNumber.innerText=currentFrequency+"kHz"
}


frequencyInput.addEventListener('change',()=>{
    //parseint makes the string into a integer
   let typed=parseInt(frequencyInput.value)
   //||= checks if it is not a number set it to 535
    typed||=505
    currentFrequency=typed
    updateUI()
} )

//left arrow
prevFrequency.addEventListener('click',()=>{
    currentFrequency -= 10
updateUI()
} )

//right arrow
nextFrequency.addEventListener('click',()=>{
   currentFrequency += 10
updateUI()
} )