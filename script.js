//
let plusSymbol = document.getElementById("plusSymbol");
let textfield = document.getElementById("journalBox");
//
let click = 0; 

/*so I click the plusBtn and the textara displays */
plusSymbol.addEventListener("click", (event) => {
  event.preventDefault(); /*prevent the page from reloading*/
  textfield.style.display = "block";
  // 
  click = click + 1;
  if (click >1) {
    textfield.placeholder = "Dear Diary ..." ; /*reset the textarea if clicking the plusSymbolBtn*/
  }
});

/*I want to click the post btn and have the textarea content to be displayed in the displayArea div*/
let postbtn = document.getElementById("postBtn");
let displayarea = document.getElementById("displayArea");

postbtn.addEventListener("click", (event) => {
  event.preventDefault();
  displayarea.style.display = "grid"; /*the div where the diaryEntries should go is now visible */
  //
  let text = journalBox.value; /*this is the content of what I typed in the textarea aka my diaryEntries*/
  //
  let entry = document.createElement("div"); /*here to allow me to store my information*/
  entry.classList.add("entry") /*to add styling to the journal entry*/ 
  //
  let deleteBtn = document.createElement("button");
  deleteBtn.id = "deleteBtn"; /*for styling*/ 
  deleteBtn.textContent = "X";
  //
  let theEntry = document.createElement("span"); /*we want the deleteBtn and the text to sit on the same line*/
  theEntry.textContent = text; /*this displays what I had typed in the textarea in the displayArea div*/
  //
  entry.appendChild(theEntry); /*attach them*/
  entry.appendChild(deleteBtn);
  //
  displayarea.appendChild(entry);
  journalBox.value=""; /*reset the textarea to allow more journal entries to happen*/
});



/*NEXT STEPS: 
After the post gets created, there should be an X button next to it to delete it 

---------- WANTS: 
the resize(?) of the textarea (aka that litter corner) needs to be darker /bigger or something 
the "post" btn should send everything to another tab with today's date at the sides? bottom? 
add cursor effect like cascasing pixel stars? 
*/

/*NOTES:
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/

/*
Custom cursor? 
https://img.freepik.com/premium-vector/carddiamond-icon-isolated-white-background_268104-11359.jpg 
*/

