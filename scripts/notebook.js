const notebookCover=document.getElementById("notebookCover")
const notebookDisplay=document.getElementById("notebookDisplay")
const closeNotebookButton=document.getElementById("closeNotebookButton")
const tabButton1=document.getElementById("tabButton1")
const tabButton2=document.getElementById("tabButton2")
const tabButton3=document.getElementById("tabButton3")
const drawSound=new Audio("audio/draw.mp3")
drawSound.volume=0.3
drawSound.playbackRate=1.2
const flipSound=new Audio("audio/flip.mp3")
flipSound.volume=0.2

//gets the class
const notebookPageClass=document.querySelector(".notebook")
//set is prevent duplicates
let checkedEvidence=new Set()
let circledMonster=null;
let currentInfoIndex=0
//columns
const columns= [
    "500-700",
    "710-900",
    "910-1100",
    "1110-1300",
    "1310-1500",
]
//rows
const rows= [
    "Whispering",
    "Loud Static",
    "No Static",
    "Breathing",
    "Heart Beat",
    "Screams",
    "Wind",
    "Tapping"
]


// function guessPage()

function getEvidence(row,column){
    return row + "/" + column

}

function showPage(page){
if (page==="evidence"){
    evidencePage()
}
if (page==="guess"){
    guessPage()
}
if (page==="info"){
    infoPage()
}}
function infoPage(){
  let anomaly=anomalies[currentInfoIndex]
//auto fill did this
let prevDisabled= currentInfoIndex===0 ? "disabled" : ""
let nextDisabled= currentInfoIndex===anomalies.length-1 ? "disabled" : ""
notebookPageClass.innerHTML=
"<div id='infoContainer'>"+
"<div class='infoSketchBox'>"+
"<img class='infoSketch' src='"+anomaly.sketch+"'>"+
"</div>"+
"<div class='infoDetails'>"+
"<h3 class='infoMonsterName'>"+anomaly.name.toUpperCase()+"</h3>"+
"<p class='infoDescription'>"+anomaly.description+"</p>"+
"<p class='infoSound'>"+anomaly.soundProfile+"</p>"+
"</div>"+
"</div>"+
"<div id='infoButtons'>"+
"<button id='prevButton' "+prevDisabled+">◀ PREV</button>"+
"<span id='infoCounter'>"+(currentInfoIndex+1)+"/"+anomalies.length+"</span>"+
"<button id='nextButton' "+nextDisabled+">NEXT ▶</button>"+
"</div>"

let prevButton=notebookPageClass.querySelector("#prevButton")
let nextButton=notebookPageClass.querySelector("#nextButton")

prevButton.addEventListener("click",()=>{
    if(currentInfoIndex>0){
        currentInfoIndex--
        infoPage()
        flipSound.currentTime=0
    flipSound.play()
    }
})
nextButton.addEventListener("click",()=>{
    if(currentInfoIndex<anomalies.length-1){
        currentInfoIndex++
        infoPage()
        flipSound.currentTime=0
    flipSound.play()
    }   
}
)
}
function evidencePage(){
  //th = table header, need tr = table row, td = table content / data
    //th table header and colums
    //example
//     <table>
//   <tr>
//     <th>Header 1</th>
//     <th>Header 2</th>
//     <th>Header 3</th>
//   </tr>
//   <tr>
//     <td>Data 1</td>
//     <td>Data 2</td>
//     <td>Data 3</td>
//   </tr>

    let header = "<th></th>"
    //for each string in the array add it to a header for columns
    columns.forEach((string)=>{
        header+="<th>"+string+"</th>"
    })

    //Rows
    let body="";
    //for each string the array
    rows.forEach((rows)=>{
        body+="<tr>"+
        "<td>"+rows+"</td>"
    
    //this is for every column per row
    columns.forEach((columns)=>{
        //combines the row header and the colum header
        let evidence = getEvidence(rows, columns)

        //this makes it remember what you have checked
        let remember=""
        if (checkedEvidence.has(evidence)){
            remember = " checked"
        }
//<td><input type='checkbox' value='(evidence)' checked></td>
        body+="<td>"+
        "<input type='checkbox' value='"+ evidence +
        "'"+remember+
        ">"+"</td>"
    })
    body+="</tr>"
})

notebookPageClass.innerHTML=
"<h2 class='pageHeader'></h2>"+
"<table id='evidenceTable'>"+
"<tr>" + header+"</tr>"+
body +"</table>"
//puts all the checkboxes into checkboxes
let checkboxes=notebookPageClass.querySelectorAll("#evidenceTable input[type='checkbox']")
//for each checkbox
checkboxes.forEach((box)=>{
    //checks when the checkbox is clicked
    box.addEventListener("change", (e)=>{
    drawSound.currentTime=0
    drawSound.play()
        //sets evid to the checkboxes value set  above
    let evid= e.target.value
    if(e.target.checked){
        //adds teh evidence to the lsit of clues
        checkedEvidence.add(evid)
    }else{
        //removes the evidence from the array
        checkedEvidence.delete(evid);
    }
        })
    })
}










function guessPage(){
    let grid =""
//for each anomaly
    anomalies.forEach((anomaly)=>{
        //start uncrossed
        let isEliminated=false
//for each evidence in checked Evidenced
        checkedEvidence.forEach((evidenceClue)=>{
            //If the monsters evidences doesnt include a checked clue, make it not an option
            if (!anomaly.evidence.includes(evidenceClue)){
                isEliminated=true
            }
        })

        let cardClass="monsterCard"
        let overlays=""
         if(circledMonster===anomaly.id){
            cardClass+=" circled"
            overlays+= "<img class='cardOverlay circleOverlay' src='Circle.png'>"

        }else if(isEliminated){
            cardClass+=" eliminated"
            overlays+= "<img class='cardOverlay strikeOverlay' src='Xcross.png'>"
        }
       

        grid+=
        //<div class='cardClass' data-id='anomoly.id'>
        //<span class ='monsterName'> anomoly.name </span> </div>
        "<div class='"+ cardClass +
         "' data-id='"+ anomaly.id + "'>" +
         "<span class='monsterName'>"+anomaly.name+"</span>"+
         overlays +
         "</div>"

    })
    let disabled="disabled"
    if (circledMonster===null){
        disabled="disabled"
    }else{
        disabled=""
    }
    //puts the grid and teh button into teh html
    notebookPageClass.innerHTML="<div id='guessGrid'>"+grid+"</div>"+
    "<button id='submitButton' "+disabled+">PROCEED</button>"


    //each card with the class monsterCard
    let cards=notebookPageClass.querySelectorAll(".monsterCard")
    cards.forEach((card)=>{
        card.addEventListener("click", ()=>{
             drawSound.currentTime=0
    drawSound.play()
            //sets id to id of the card
            let id = card.getAttribute("data-id")
            //when clicked on a card, (null) it first does teh else, then unselect makes it null
            if (circledMonster===id){
                circledMonster=null
            }else{
                circledMonster=id
            }
            //refresh when clicked
            guessPage()
        })
    })
    
    let submitButton=document.getElementById("submitButton")
    submitButton.addEventListener("click",()=>{
        //if you havent circled a monster
        if(circledMonster===null){
            return
        }
        
        if (confirm("Do you want to Proceed?")){            
            endRound(false, circledMonster)
        }
    })
}








function changeTabs(){

    //removes all classes and replace with tab class
    tabButton1.className="tab"
    tabButton2.className="tab"
    tabButton3.className="tab"
}
tabButton1.addEventListener("click", ()=>{
    changeTabs();
    tabButton1.className="tabActive"
    showPage("evidence")
    flipSound.currentTime=0
    flipSound.play()
})
tabButton2.addEventListener("click", ()=>{
    changeTabs();
    tabButton2.className="tabActive"
    showPage("guess")
    flipSound.currentTime=0
    flipSound.play()
})
tabButton3.addEventListener("click", ()=>{
    changeTabs();
    tabButton3.className="tabActive"
    showPage("info")
    flipSound.currentTime=0
    flipSound.play()
})





//open close
notebookCover.addEventListener("click", ()=>{
    notebookDisplay.classList.remove("hidden")
    closeNotebookButton.classList.remove("hidden")
    flipSound.currentTime=0
    flipSound.play()

})
closeNotebookButton.addEventListener("click",()=>{
    notebookDisplay.classList.add("hidden")
        closeNotebookButton.classList.add("hidden")
flipSound.currentTime=0
    flipSound.play()
})
//load before
showPage("evidence")