const crankCover=document.getElementById("crankCover")
const crankImg=document.getElementById("crankImage")
const crankWarning=document.getElementById("crankWarning")
let isCranking=false
let crankInterval=null
let QTETimer=null
let reactionTimer=null
let isWarning=false
let successTimer=null
const crankSound=new Audio("audio/crank.mp3")   
crankSound.loop=true
crankSound.volume=0.05
const crankStaticImage="images/crank.png"
const crankMovingImage="images/crankMoving.gif"

function startCranking(){
    //stops if it is cranking or battery is full
    if(isCranking||battery>=100){
        return;
    }

    isCranking=true
    crankImg.src=crankMovingImage
crankSound.currentTime=0
    crankSound.play()
    clearTimeout(successTimer)
    hideWarning()
//how long it recharges battery
    crankInterval=setInterval(()=>{
        if (battery<100){
            //this is for to add battery as well as when it reaches 100%
            battery=Math.min(100, battery+ 0.4)

            updateBarUI()
        }
    }, 100)


nextQTE()
}

function nextQTE(){
    //2000ms to 3000ms
    const delay =Math.floor(Math.random()*6000)+2000

    QTETimer = setTimeout(()=>{
        //if its not cranking return
if(!isCranking){
    return              
}
        crankQTE()

    },delay)
}
function crankQTE(){
    isWarning=true
    crankWarning.classList.remove("hidden")

    reactionTimer=setTimeout(()=>{
        //if you are cranking and the warning has occured
        if(isCranking&&isWarning){
            console.log("QTE FAILED")
                    HP-=15
                    damageSound.currentTime=0
            damageSound.play()
                    updateBarUI()

            //TEMPORARY
        }
        stopCranking(false)
    },550)
}

function hideWarning(){
    isWarning=false
    crankWarning.classList.add("hidden")
        crankWarning.innerText="RELEASE!"

}
crankCover.addEventListener("mousedown", startCranking)
window.addEventListener("mouseup", ()=>stopCranking(true))

function stopCranking(released){
    //returns if not cranking
    if(!isCranking){
        return;
    }
    isCranking=false
        crankImg.src=crankStaticImage
        crankSound.currentTime=0
    crankSound.pause()
    //stops the timers
    clearInterval(crankInterval)
    clearTimeout(QTETimer)

    if(isWarning){
                clearTimeout(reactionTimer)

        if(released){
            console.log("QTE SUCCESS")
            crankWarning.innerText="SUCCESS!"
            crankWarning.classList.remove("hidden")
            clearTimeout(successTimer)
            successTimer=setTimeout(() => {
                hideWarning()
            }, 500);
        }else{
        hideWarning()
    }}
}