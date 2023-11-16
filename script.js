const container = document.querySelector("#container");


let fragment = new DocumentFragment();
let numberOfItems = 256;

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
)
