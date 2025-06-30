const nbtns = document.querySelector(".nbtns");
const ybtns = document.querySelector(".ybtns");
const dv = document.querySelector(".bgdv");

let ybtnsScale = 1; // Initial scale

nbtns.addEventListener("mouseover", () => {
  dv.style.backgroundImage = "url(angry.gif)";
});

nbtns.addEventListener("mouseout", () => {
  dv.style.backgroundImage = "url()";
});

ybtns.addEventListener("mouseover", () => {
  dv.style.backgroundImage = "url(kalp.gif)";
});

ybtns.addEventListener("mouseout", () => {
  dv.style.backgroundImage = "url()";
});

nbtns.addEventListener("click", () => {
  ybtnsScale += 1; 
  ybtns.style.transform = `scale(${ybtnsScale})`;
});

const buttons = document.querySelectorAll('.nbtns');


