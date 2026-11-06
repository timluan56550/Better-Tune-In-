const notebookCover=document.getElementById("notebookCover")
const notebookDisplay=document.getElementById("notebookDisplay")
const closeNotebookButton=document.getElementById("closeNotebookButton")











//open close
notebookCover.addEventListener("click", ()=>{
    notebookDisplay.classList.remove("hidden")
    closeNotebookButton.classList.remove("hidden")

})
closeNotebookButton.addEventListener("click",()=>{
    notebookDisplay.classList.add("hidden")
        closeNotebookButton.classList.add("hidden")

})