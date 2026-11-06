const notebookCover=document.getElementById("notebookCover")
const notebookDisplay=document.getElementById("notebookDisplay")
const closeNotebookButton=document.getElementById("closeNotebookButton")
const tabButton1=document.getElementById("tabButton1")
const tabButton2=document.getElementById("tabButton2")
const tabButton3=document.getElementById("tabButton3")
//gets the class
const notebookPageClass=document.querySelector(".notebook")

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

function showPage(page){
if (page==="evidence"){
    evidencePage()
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

    let header = "<th>"+"Evidence"+"</th>"
    //for each string in the array add it to a header for columns
    columns.forEach((string)=>{
        header+="<th>"+string+"</th>"
    })

    //Rows
    let body="";
    //for each string the array
    rows.forEach((string)=>{
        body+="<tr>"+
        "<td>"+string+"</td>"
    
    //this is for every column per row
    columns.forEach(()=>{
        body+="<td>"+"<input type='checkbox'>"+"</td>"
    })
    body+="</tr>"
})

notebookPageClass.innerHTML=
"<h2 class='pageHeader'>EVIDENCE</h2>"+
"<table id='evidenceTable'>"+
"<tr>" + header+"</tr>"+
body +"</table>"
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