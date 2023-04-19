const box = document.getElementById("box");
const arrows = document.querySelectorAll(".arrow");
const arrowDirections = ["up", "down", "left", "right"];
const arrowColors = ["red", "blue"];
const button = document.querySelector("#btn")


button.addEventListener("click", (e)=> {
    console.log("Hello")
    e.preventDefault()
    location.href="/level5"
})

// let score = 0;

// // Move the arrows every 1 second
// setInterval(moveArrows, 1000);

// // Check if the user pressed the correct arrow key
// document.addEventListener("keydown", checkArrowKey);

// function moveArrows() {
//   arrows.forEach((arrow) => {
//     const direction =
//       arrowDirections[Math.floor(Math.random() * arrowDirections.length)];
//     const color = arrowColors[Math.floor(Math.random() * arrowColors.length)];

//     arrow.className = "arrow " + color;
//     arrow.style[direction] = "-50px";
//     setTimeout(() => {
//       arrow.style[direction] = "";
//     }, 500);
//   });
// }

// function checkArrowKey(event) {
//   const key = event.key;
//   const activeArrow = document.querySelector(".arrow.red, .arrow.blue");

//   if (activeArrow) {
//     const direction =
//       activeArrow.style[
//         arrowDirections.find((dir) => activeArrow.style[dir] !== "")
//       ];
//     const color = activeArrow.classList.contains("red") ? "red" : "blue";
//     const correctKey = getArrowKey(direction);

//     if (key === correctKey) {
//       score++;
//       activeArrow.remove();
//       if (score === 4) {
//         alert("You won!");
//       }
//     } else {
//       alert("Game over!");
//     }
//   }
// }

// function getArrowKey(direction) {
//   switch (direction) {
//     case "top":
//       return "ArrowUp";
//     case "bottom":
//       return "ArrowDown";
//     case "left":
//       return "ArrowLeft";
//     case "right":
//       return "ArrowRight";
//   }
// }
