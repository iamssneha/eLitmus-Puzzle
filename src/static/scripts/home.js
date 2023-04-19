const continueBtn = document.querySelector("#continue");
const startBtn = document.querySelector("#start");

if (continueBtn != null) {
  continueBtn.addEventListener("click", () => {
    var b = parseInt(currLevel);
    const url = `level${b + 1}`;
    location.href = url;
  });
}
startBtn.addEventListener("click", () => {
  let formData = new FormData();
  formData.append("number_of_tries", 1);
  fetch("/update-tries", {
    method: "POST",
  })
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      location.href = "/level1";
    });
});
