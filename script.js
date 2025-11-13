let body = document.body;
//
let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "something was done"; /*changes the text of the button*/
  console.log("Clicked")
  let textfield = document.querySelector("textarea");
  textfield.id = "journalBox"
  textfield.placeholder = "Today I ... "
  textfield.classList.add = "placeholder"
});


/*NEXT STEPS: 
I need to create a post button
the resize(?) of the textarea, needs to be darker /bigger or something */


/*
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/


/*custom cursor? 
https://img.freepik.com/premium-vector/carddiamond-icon-isolated-white-background_268104-11359.jpg 
*/

//add cursor effect like cascasing pixel stars? 

