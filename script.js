let body = document.body;
//
let plusSymbol = document.getElementById("plusSymbol");
let textfield = document.getElementById("journalBox");

/*so I click the plusBtn and the textara displays */
plusSymbol.addEventListener("click", (event) => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "something was clicked"; /*delete later*/
  console.log("Clicked"); /*delete later*/
  textfield.placeholder = "just to show something changed"; /*delete later*/
  textfield.style.display = "block"; 
});

/*I want to click the post btn and have the textarea content to be displayed in the displayArea div*/
let postbtn = document.getElementById("postBtn");
let displayarea = document.getElementById("displayArea");

postbtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("the textarea stuff needs to show up"); /*delete later*/
  displayarea.style.display = "grid"; 
  let text = journalBox.value; /*the content of what I typed in the textarea*/
  let entry = document.createElement("div"); /*here to allow me to store my information*/
  entry.classList.add("entry") /*to add styling to the journal entry*/ 
  entry.textContent = text; /*this should display what I had typed in the textarea in the displayArea div*/
  displayarea.appendChild(entry);
  journalBox.value=""; /*reset the textarea to allow more journal entries to happen*/
});

/*NEXT STEPS: 
the resize(?) of the textarea (aka that litter corner) needs to be darker /bigger or something 

i want to keep clicking the plusSymbolBtn to create more textareas so a LOOP?
this means remove LINE7 later 

the "post" btn should send everything to another tab with today's date at the sides? bottom? 

After the post gets created, there should be an X button next to it to delete it 

pressing plusSymbol should reset the textarea 
*/

/*
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/

/*custom cursor? 
https://img.freepik.com/premium-vector/carddiamond-icon-isolated-white-background_268104-11359.jpg 
*/

//add cursor effect like cascasing pixel stars?
