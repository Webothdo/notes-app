let addNote = document.querySelector(".add-note");
let deleteNote = document.querySelector(".delete-note")
let textArea = document.querySelector("#text-area");
let noteList = document.querySelector(".note-list");
let notes = ['ade']

//This is the function to get the note text 
function getNote() {
 let noteObj = textArea.value
 return noteObj
}

let html = ''

//Function to add note to list
addNote.addEventListener("click", function fname() {
  notes.push(getNote())
  console.log(notes)
  localStorage.setItem(1, JSON.stringify(notes))
  console.log(localStorage.getItem(1));
  
  showNotes()
  })
  
 const showNotes  = () => {
   let notes = localStorage.getItem(1)
   let notePass = JSON.parse(notes)
  notePass.forEach((value, index) => {
  //  html =  `<p>${value}</p>`;
   noteList.innerHTML = html
   for (let i = 0; i < notePass.length; i++) {
     noteList.innerHTML += `<p>${notePass[i]}</p>`
   }
   //localStorage.removeItem(1)
    
  })
 }
 
 showNotes()
  
  //noteList.innerHTML = showNotes

//deleteNote.addEventListener("click", function fname() {
// alert('you clicked me')
//}) okay


console.log(getNote());
