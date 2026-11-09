let day=1;
const fileReport=document.getElementById("fileReport")
const reportDay=document.getElementById("reportDay")
const reportSurvival=document.getElementById("reportSurvival")
const reportDeduction=document.getElementById("reportDeduction")
const reportGuess=document.getElementById("reportGuess")
const reportActual=document.getElementById("reportActual")
const reportTime=document.getElementById("reportTime")
const reportStamp=document.getElementById("reportStamp")
const shiftButton=document.getElementById("shiftButton")

function endRound(death, circledMonster){
    endLock()
    //time
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
const endTime=shiftHour+":"+minute+" "+period    


    //anomoly
    let guess=null;
    if (circledMonster){
        guess=circledMonster.toUpperCase()
    }else{
        guess="NONE"
    }
    const actual =currentAnomaly.name.toUpperCase();
    const correct = (guess===actual)


    reportDay.innerText="Day "+day
                reportDay.style.color="#464444"

    reportTime.innerText=endTime
            reportTime.style.color="#464444"

    reportGuess.innerText=guess
        reportGuess.style.color="#464444"

    reportActual.innerText=actual
            reportActual.style.color="#464444"

    if(death){
        reportSurvival.innerText="DIED";
        reportSurvival.style.color="#b90704";

        reportDeduction.innerText="TERMINATED";
        reportDeduction.style.color="#b90704";

        reportStamp.innerText="TERMINATED";
        reportStamp.style.color="#b90704";

        shiftButton.innerText="RESTART SHIFT";
        shiftButton.onclick=() => {
            restartGame(true)
        }
    }else{
        reportSurvival.innerText="SURVIVED";
        reportSurvival.style.color="#1b892a";
        if(correct){
            reportDeduction.innerText="CORRECT";
            reportDeduction.style.color="#1b892a";

            reportStamp.innerText="PASSED";
            reportStamp.style.color="#1b892a";

        }else{
            reportDeduction.innerText="INCORRECT";
            reportDeduction.style.color="#b90704";

            reportStamp.innerText="WARNING";
            reportStamp.style.color="#b90704";
        }
        shiftButton.innerText="NEXT SHIFT (DAY "+(day+1)+")";
        shiftButton.onclick=() => {
            restartGame(false)
        }
    }
           fileReport.classList.remove("hidden")

}
function restartGame(death){
    if(death){
        day=1;
    }else{
        day+=1;
    }
    HP=100;
    battery=100;
    shiftHour=10;
    shiftMinute=0;
    am=false;
    shiftEnded=false;
    circledMonster=null;
    currentEvidence=[]
    checkedEvidence.clear()
    fileReport.classList.add("hidden")
    notebookDisplay.classList.add("hidden")
    closeNotebookButton.classList.add("hidden")
    updateClockUI()
    updateBarUI()
    startRound()
    startShift()
changeTabs();
    tabButton1.className="tabActive"
    showPage("evidence")}