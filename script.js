let plusSymbol = document.getElementById("plusSymbol");
let textfield = document.getElementById("journalBox");
//
let click = 0; 

/*so I click the plusSymbolBtn and the textara displays */
plusSymbol.addEventListener("click", (event) => {
  event.preventDefault(); /*prevent the page from reloading*/
  textfield.style.display = "block";
  /*reset the textarea if clicking the plusSymbolBtn*/
  click = click + 1;
  if (click >1) {
    textfield.placeholder = "Dear Diary ..." ; 
    textfield.value = ""; 
  }
});

/*I want to click the post btn and have the textarea content to be displayed in the displayArea div*/
let postbtn = document.getElementById("postBtn");
let displayarea = document.getElementById("displayArea");

postbtn.addEventListener("click", (event) => {
  event.preventDefault();
  displayarea.style.display = "flex"; /*the div where the diaryEntries should go is now visible */
  //
  let text = journalBox.value; /*this is the content of what I typed in the textarea aka my diaryEntries*/
  //
  let entry = document.createElement("div"); 
    /*here to allow me to store my information. I am creating a new div within the displayArea div*/
  entry.classList.add("entry", "tile") /*to add styling to the journal entry*/ 
  //
  let deletebtn = document.createElement("button");
  deletebtn.classList.add("deleteBtn"); /*for styling*/ 
  deletebtn.textContent = "X";
  //
  let entryText = document.createElement("div"); 
    /*allows date-time, journalText (what I typed), X btn to sit on top of each other*/
  entryText.textContent = text; /*this displays what I had typed in the textarea in the displayArea div*/
  //
  /*adding functionality to the deleteBtn*/
  deletebtn.addEventListener("click", (event) => { 
    event.preventDefault();
    entry.remove()
  })
  
  if (text.length == 0) { /*prevent an empty post from being made*/
    alert("Please write something first"); 
    entry = false; 
  } else {
    currentDate = new Date()
    currentDate.toLocaleString(); /*gives the current day and time in readable format*/
    entry.append(currentDate) /*attaches the date-time to entry (the new div that will hold the journal text) */
    //
    entry.appendChild(entryText); 
      /*attaching journalBox.value (so what I typed) to entry (aka the new div that will hold the text*/
    entry.appendChild(deletebtn); /*attaching the btn to the div also*/
  }
  //
  displayarea.appendChild(entry);
  journalBox.value=""; /*reset the textarea to allow more journal entries to happen*/
});


/*NEXT STEPS: 
the "post" btn should send everything to another tab with today's date at the sides? bottom? 
add cursor effect like cascading pixel stars? 
add custom sounds?

FAR FUTURE: upload onto Netlify and sites like that 
*/

/*custom sounds?
button one? https://pixabay.com/sound-effects/sparkle-355937/ 
mousemove eventlistener one --> https://pixabay.com/sound-effects/magic-sparkle-190030/ 
post sound: https://pixabay.com/sound-effects/magic-sparkle-190030/ 
*/



/*NOTES:
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
.appendChild ONLY accepts 1 agrument 
appendChild is wrong when using Date() bc it isnt a DOM node object. I was trying to pass a string.  


*/

