let plusSymbol =
  document.getElementById("plusSymbol"); /*the "new post button"*/
let textfield =
  document.getElementById(
    "journalBox",
  ); /*the corresponding HTML is <textarea>*/
//
let click = 0;

let letPlaceholderTextbe = [
  "Dear Diary ...",
  "Dear Journal ...",
  "Today I ...",
  "Today we...",
  "You won't believe what happened!",
  "I am feeling",
  "My mood is ...",
];

function newPlaceholderText() {
  return Math.floor(Math.random() * letPlaceholderTextbe.length);
  /*letPlaceholderTextbe.length is how long that list is which is currently 7
  So 7 times a number from 0-1 
  And finally we round that number
  */
}

/*so I click the plusSymbolBtn and the textara displays */
plusSymbol.addEventListener("click", (event) => {
  event.preventDefault(); /*prevent the page from reloading just bc the button was clicked*/
  textfield.style.display = "block";
  /*reset the textarea if clicking the plusSymbolBtn*/
  click = click + 1;
  if (click > 1) {
    let randomPlaceholder = newPlaceholderText();
    /*I am calling the function which gives me a number*/
    textfield.placeholder = letPlaceholderTextbe[randomPlaceholder];
    /*then I am calling the list by the number ("index")*/
    textfield.value = "";
  }
});

/*I want to click the post btn and have the textarea content to be displayed in the displayArea div*/
let postbtn = document.getElementById("postBtn");
let displayarea = document.getElementById("displayArea");

const poof = new Audio("poof.mp3"); /*the deleteBtn's sound effect*/
poof.preload = "auto";
poof.playbackRate = 1.2;
/*it is placed outside and not with the rest of the deleteBtn code to prevent this audible lag*/

postbtn.addEventListener("click", (event) => {
  event.preventDefault();
  //
  displayarea.style.display =
    "flex"; /*the div where the diaryEntries should go is now visible */
  //
  let text = journalBox.value;
  /*this is the content of what I typed in the textarea aka my diaryEntries*/
  /*I have NOT done anything to this yet*/
  //
  if (text.length == 0) {
    /*prevent an empty post from being made*/
    alert("Please write something first");
    return;
  }
  //
  const sound = new Audio("sparkle.mp3"); //adding audio to post button
  sound.play();
  //
  let entry = document.createElement("div");
  /*I am creating a new div within the displayArea div*/
  /*It would hold everything I wrote in the textbox; it is the journal entry*/
  entry.classList.add("entry", "tile"); /*to add styling to the journal entry*/
  //
  let deletebtn = document.createElement("button");
  deletebtn.classList.add("deleteBtn"); /*for styling*/
  deletebtn.textContent = "X";
  //
  let entryText = document.createElement("div");
  /*allows date-time, journalText (what I typed), X btn to sit on top of each other*/
  entryText.textContent = text;
  /*this displays what I had typed in the textarea in the displayArea div*/
  /*I have now done something with text = journalBox.value*/
  //
  let date = document.createElement("div");
  date.textContent = new Date().toLocaleString();
  /*we created a date object and then restructured it so that we can read the day and time */
  //
  /*adding functionality to the deleteBtn*/
  deletebtn.addEventListener("click", (event) => {
    event.preventDefault();

    poof.play(); /*sound effect plays when btn is clicked*/

    entry.remove();
  });
  //
  //so I created the stuff that I need, now I'm implementing "action"
  entry.append(date);
  /*attaches the date-time to entry (the new div that will hold the journal text) */
  //
  entry.appendChild(entryText);
  /*attaching journalBox.value (so what I typed) to entry (aka the div that will hold the text*/
  entry.appendChild(deletebtn); /*attaching the btn to the div also*/
  //
  displayarea.appendChild(entry);
  journalBox.value =
    ""; /*reset the textarea to allow more journal entries to happen*/
});

/*NEXT STEPS: 
newpost-btn is missing a sound effect 
click newpost-btn and the "placeholder text" changes randomly? 

the "post" btn should send everything to another tab with today's date at the sides? bottom? 
add cursor effect like cascading pixel stars? 
--> https://www.amitmerchant.com/popover-api-101/    --> related? use? reference? 
--> https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API 
--> https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML 


change the alert 9"you need to write something first before posting") to something else 
  --> suggestions: https://sweetalert.js.org/ 
  --> https://svelte-french-toast.com/ 
  --> dialog 
  --> blurt --> https://bitwiser.in/blurt/#:~:text=blurt%20is%20a%20javascript%20replacement,prompt()%20%2D%3E%20brompt() 

figure out how to add images for journal entry 

create a hide button --> hide all entry & a hide info but keep the date 

FAR FUTURE: upload onto Netlify and sites like that 
*/

/*custom sounds?
mousemove eventlistener one --> https://pixabay.com/sound-effects/magic-sparkle-190030/ 
*/

/*NOTES:
.remove() is how to remove 
plusSymbol.classList.add("")    how to add a classList 
.appendChild ONLY accepts 1 agrument 
appendChild is wrong when using Date() bc it isnt a DOM node object. I was trying to pass a string.  

new Audio() creates an audio object, allowing me to add audio 
audio.playbackRate = 0.5; means half of the normal speed (aka the 0.5)
playbackRate = 1 means normal 

Math.floor() = rounding numbers
Math.random() has a range of 0-1 
*/
