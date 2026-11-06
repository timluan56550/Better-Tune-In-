const nextFrequency = document.getElementById("nextFrequency")
const prevFrequency = document.getElementById("previousFrequency")
const frequencyInput = document.getElementById("freqInput")
const frequencyNumber = document.getElementById("frequencyNumber")

let currentFrequency=500;

function updateUI(){
// this rounds it to the nearest 10 increment. 
    currentFrequency=Math.floor((currentFrequency)/10)*10

    //limit between 505 and 1505
    currentFrequency = Math.floor(Math.max(500, Math.min(1500, currentFrequency)))
    frequencyInput.value=currentFrequency
    frequencyNumber.innerText=currentFrequency+"kHz"
}


frequencyInput.addEventListener('change',()=>{
    //parseint makes the string into a integer
   let typed=parseInt(frequencyInput.value)
   //||= checks if it is not a number set it to 535
    typed||=500
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