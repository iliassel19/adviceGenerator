const btn = document.querySelector(".advice__btn");
const adviceId = document.querySelector(".advice__num");
const adviceText = document.querySelector(".advice__text");

const generateAdvice = async function () {
  const adviceAPi = await fetch("https://api.adviceslip.com/advice");
  const data = Object.values(await adviceAPi.json())[0];

  adviceId.textContent = data.id;
  adviceText.textContent = data.advice;
};
generateAdvice();

btn.addEventListener("click", generateAdvice);
