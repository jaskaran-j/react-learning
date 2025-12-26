// started day 5
// Document Object Model
// JS takes our HTML and converts it into a giant Tree Data Structure

// 5.1 selecting elements
    const title = document.querySelector("h1"); // gets the first <h1> tag
    const button = document.querySelector(".btn"); // gets the element with "btn" class
    const header = document.querySelector("#header"); // gets the element with id=header

// 5.2 changing values
    title.innerText = "New Text";
    title.style.backgroundColor = "black";

// practice
    // given <p class="status">Offline</p>
    // select p using its class and change the text color to green
    const status = document.querySelector(".status");
    status.innerText = "Online";
    status.style.color="green";

// 5.3 Event Listener
    // this helps us make something interactive, for exmaple: it 
    // makes the code run wehan the user does something (clicks, scroll, type)
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
        console.log("Button was clicked!");
        btn.innerText = "Clicked";
    });

// practice:
// given this button: <button class="mode-btn">Dark Mode</button>
// add an event listerner for click and turn body bgColor to black
const mode_btn = document.querySelector(".mode-btn");
mode_btn.addEventListener("click", () =>{
    document.body.style.backgroundColor = "black";
})