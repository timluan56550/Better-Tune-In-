const notebookCover=document.getElementById("notebookCover")
const notebookDisplay=document.getElementById("notebookDisplay")
const closeNotebookButton=document.getElementById("closeNotebookButton")
const tabButton1=document.getElementById("tabButton1")
const tabButton2=document.getElementById("tabButton2")
const tabButton3=document.getElementById("tabButton3")
//gets the class
const notebookPageClass=document.querySelector(".notebook")
//set is prevent duplicates
let checkedEvidence=new Set()
let circledMonster=null;
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
    "Red Effect",
    "Screeches",
    "Fake help"
]

const anomalies = [
    {
        id: "phantom",
        name: "Phantom",
        evidence: ["Whispering/500-700", "No Static/710-900"]
    }
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
}

)}



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
})
tabButton2.addEventListener("click", ()=>{
    changeTabs();
    tabButton2.className="tabActive"
    showPage("guess")
})
tabButton3.addEventListener("click", ()=>{
    changeTabs();
    tabButton3.className="tabActive"
    showPage("info")
})





//open close
notebookCover.addEventListener("click", ()=>{
    notebookDisplay.classList.remove("hidden")
    closeNotebookButton.classList.remove("hidden")

})
closeNotebookButton.addEventListener("click",()=>{
    notebookDisplay.classList.add("hidden")
        closeNotebookButton.classList.add("hidden")

})
//load before
showPage("evidence")