function dragStart(even){
 
    const element = even.target;
    draggedDOM = element;
 
    element.style.opacity = 0.7;
}
 
 
function dragEnter(even){
 
    const dropZone = this;
    const dragedElement = dropZone.querySelector("#element");
     
    if(dragedElement) return false;
 
    dropZone.appendChild(draggedDOM);
}
 
function dragDroped(even){
    // prevent to automatically open some files
    even.preventDefault();
    const dropZone = this;
 
    dropZone.appendChild(draggedDOM);
}
 
 
// DOM
 
const dropZone = document.querySelectorAll(".zone");
 
window.draggedDOM = null;
 
Array.from(dropZone).forEach(function(element){
    element.addEventListener("dragstart" , dragStart);
    element.addEventListener("dragenter" , dragEnter);
 
    element.addEventListener("dragover" , function(event){
        // prevent to let event drop trigger
        event.preventDefault();
    });
 
    element.addEventListener("drop" , dragDroped);
    element.addEventListener("dragend" , function(e){
        draggedDOM.style.opacity = 1;
    });
})