const form = document.querySelector("form");
const hint_button1 = document.querySelector("#hint1");
const hint_button2 = document.querySelector("#hint2");
let tries = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ans = form.guess.value;
  let formData = new FormData();
  formData.append("level2", 0);
  formData.append("level3", 0);
  formData.append("level4", 0);
  formData.append("level5", 0);
  if (ans === "Look Below the Key") {
    tries += 1;
    formData.append("level1", tries);
    formData.append("curr_level", 1);
    alert("You guessed it right");
    fetch("/update-data", {
      method: "POST",
      body: formData
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => console.log(data));
    location.href = "/level2";
  } else {
    tries += 1;
    alert("Wrong Code! The Gate didnt open");
  }
});

hint_button1.addEventListener("click", () => {
  alert("Read the Note Again");
});

hint_button2.addEventListener("click", () => {
  alert("The note is the answer");
});
