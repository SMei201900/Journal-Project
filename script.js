let body = document.body;
//
let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "Create a new post"; /*changes the text of the button*/
  console.log("Clicked")
/*I want the click plus button to untransparent the textarea*/
});


/*NEXT STEPS: 
change +symbol to NEW POST as original text 
And then click will untransparent the textarea 
I need to create a post button*/



/*
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/



//NOTES 
// #myTextarea {
//   background-color: rgba(255, 255, 255, 0); /* Initial transparent background */
//   border: 1px solid rgba(0, 0, 0, 0.2); /* Subtle, semi-transparent border */
//   transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
// }

// #myTextarea:focus {
//   background-color: rgba(255, 255, 255, 1); /* Opaque background on focus */
//   border-color: rgba(0, 0, 0, 0.8); /* More prominent border on focus */
// }

/*custom cursor? 
https://img.freepik.com/premium-vector/carddiamond-icon-isolated-white-background_268104-11359.jpg 
*/

//add cursor effect like cascasing pixel stars? 

