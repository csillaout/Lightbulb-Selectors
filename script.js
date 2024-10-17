const lightbulb = document.querySelectorAll(".lightbulb");
const output = document.querySelector(".subtitle");
let count = 0;

lightbulb.forEach((lightbulb) => {
  lightbulb.addEventListener("click", function () {
    count++;
    lightbulb.classList.toggle("active");
    output.innerHTML = `You've clicked the lights ${count} times`;
  });
});
