let plusSymbol = document.getElementById("plusSymbol");

plusSymbol.addEventListener("click", () => {
    event.preventDefault(); /*prevent the page from reloading*/
    plusSymbol.textContent = "Create a new post"; /*changes the text of the button*/
    plusSymbol.classList.add("slide-in");
        /*add a "class" called "slide-in" 
        --intent: adds a "sliding in from the left" animation*/
    console.log("Clicked")
})




/*
.remove() is how to remove 
*/

