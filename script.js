const container = document.querySelector("#container");


let fragment = new DocumentFragment();
let numberOfItems = 256;
//items = document.querySelectorAll(".item");

function  makeGrid()  {
  for (let i = 0; i < numberOfItems; i++) {


  let divElement = document.createElement("div");
  divElement.classList.add("item");

  let pElement = document.createElement("p");
  pElement.innerText = ``;

  divElement.appendChild(pElement);
  fragment.appendChild(divElement);
}

container.appendChild(fragment);

document.querySelectorAll(".item").forEach(item =>
  item.addEventListener("mouseover", () => item.classList.toggle("black"))
);

document.querySelectorAll(".item").forEach(item =>
  item.style.height = `${100 / Math.sqrt(numberOfItems)}%`);

document.querySelectorAll(".item").forEach(item =>
  item.style.width = `${100 / Math.sqrt(numberOfItems)}%`);



}
makeGrid();

document.querySelector('button').addEventListener('click', () =>  {
  userInput = prompt('pick a number');
  numberOfItems = userInput * userInput;
  makeGrid();
})