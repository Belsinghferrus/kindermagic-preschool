const colors = ["#ef4444", "#f97316", "#22c55e", "#3b82f6", "#a855f7"];

const line1Text = "Kindermagic";
const line2Text = "Preschool";

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

function animateText(element, text) {
  element.innerHTML = "";

  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.color = colors[index % colors.length];
    element.appendChild(span);

    setTimeout(() => {
      span.classList.add("show");
    }, index * 80);
  });
}

function startAnimation() {
  animateText(line1, line1Text);

  setTimeout(() => {
    animateText(line2, line2Text);
  }, line1Text.length * 80 + 400);
}

setInterval(() => {
  startAnimation();
}, 4000);

startAnimation();