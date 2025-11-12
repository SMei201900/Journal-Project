const { createElement } = require("react");

let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "Create a new post"; /*changes the text of the button*/
  console.log("Clicked");
  let journalBox = createElement("textarea")

});

/*
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
*/
