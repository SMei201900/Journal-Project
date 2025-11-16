let body = document.body;
//
let form = document.getElementById("theBtns")
let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "something was clicked"; /*changes the text of the button*/
  console.log("Clicked")
  document.getElementById("journalBox").placeholder = "just to show something changed";
  document.getElementById("journalBox").style.display = "block"; 
    /*this changed my styling SO come back to it*/
});

let postbtn = document.getElementById("postBtn");

postbtn.addEventListener("click", () => {
  event.preventDefault(); 
  console.log("the textarea stuff needs to show up"); 
})


/*NEXT STEPS: 
the resize(?) of the textarea (aka that litter corner) needs to be darker /bigger or something 

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

