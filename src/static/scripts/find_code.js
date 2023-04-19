const form = document.querySelector("form");
const hint_button = document.querySelector("#hint");
let tries = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData();
  data.append("guess", form.guess.value);
  fetch("/decode-code", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data == "incorrect") {
        tries += 1;
        alert("Wrong Code! Try using a hint");
      } else {
        let formData = new FormData();
        formData.append("level1", 0);
        formData.append("level3", 0);
        formData.append("level4", 0);
        formData.append("level5", 0);
        tries += 1;
        formData.append("level2", tries);
        formData.append("curr_level", 2);
        alert("You guessed it right");
        fetch("/update-data", {
          method: "POST",
          body: formData,
        })
          .then((res) => {
            return res.data;
          })
          .then((data) => {console.log(data); location.href="/level3"});
      }
    });
});

hint_button.addEventListener("click", () => {
  alert("The code is in the code");
});
