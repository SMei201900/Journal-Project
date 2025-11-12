let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
  event.preventDefault(); /*prevent the page from reloading*/
  plusSymbol.textContent = "Create a new post"; /*changes the text of the button*/
  console.log("Clicked");
  plusSymbol.classList.add("moveBtnToCenter");

});

/*
.remove() is how to remove 
*/
