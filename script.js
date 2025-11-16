let body = document.body;
//
let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "something was done"; /*changes the text of the button*/
  console.log("Clicked")
  let textfield = document.createElement("textarea")
  textfield.id = "journalBox"
  textfield.placeholder = "Today I ... " /*placeholder text*/
  textfield.classList.add("placeholder") /*adds CSS styling to placeholder text*/
  body.appendChild(textfield); /*add to the body of the HTML document*/
});


/*NEXT STEPS: 
I need to create a post button
the resize(?) of the textarea, needs to be darker /bigger or something 

i want to keep clicking the plusSymbolBtn to create more textareas so a LOOP?
this means remove LINE7 later 

the "post" btn should send everything to another tab with today's date at the sides? bottom? 

After the post gets created, there should be an X button next to it to delete it 
*/


/*
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/


/*custom cursor? 
https://img.freepik.com/premium-vector/carddiamond-icon-isolated-white-background_268104-11359.jpg 
*/

//add cursor effect like cascasing pixel stars? 

