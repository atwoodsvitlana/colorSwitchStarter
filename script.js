const button = document.querySelector("#new-color-button");
const body = document.querySelector("body");

button.addEventListener("click", changeColor);

const colorArray = [
  "#232946",
  "#fffffe",
  "#b8c1ec",
  "#eebbc3",
  "#232946",
  "#9656a1",
  "#ffc0ad",
  "#2cb67d",
];

const randomIndex = () => {
  let randomIndex = Math.floor(Math.random() * colorArray.length);
  return randomIndex;
};

function changeColor(event) {
  const color = colorArray[randomIndex()];
  const buttonColor = colorArray[randomIndex()];
  body.style.backgroundColor = color;
  button.style.backgroundColor = buttonColor;
}
