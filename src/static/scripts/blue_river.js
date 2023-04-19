const box = document.querySelector("#bluebox");
const startBtn = document.querySelector("#start-button");
const endBtn = document.querySelector("#end-button");
const raftBtn = document.querySelector("#raft-button");
let tries = 0

const startGame = ()=> {
    startBtn.style.display = "block";
raftBtn.style.display = "none";
endBtn.style.display = "none";
box.style.display = "none";
}
box.addEventListener("mouseover", (e) => {
    tries += 1
    startBtn.innerHTML = "Re-Try";
    startGame()
    alert("You touched the water and died");
});

startBtn.addEventListener("click", ()=> {
    startBtn.style.display = "none";
    raftBtn.style.display = "block";
    endBtn.style.display = "block";
    box.style.display = "block";
})

raftBtn.addEventListener("click", ()=> {
        tries += 1;
        startGame();
        startBtn.innerHTML = "Re-Try";
    alert("The raft had a hole. You did not reach the treasure")
})

endBtn.addEventListener("click", ()=> {
    let formData = new FormData();
    formData.append("level1", 0);
    formData.append("level2", 0);
    formData.append("level4", 0);
    formData.append("level3", 0);
    tries += 1;
    formData.append("level5", tries);
    formData.append("curr_level", 5);
    alert("You found it");
    fetch("/update-data", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => console.log(data));
    location.href = "\congrats"
})

startGame();