import { discs } from "./discs.js";
import { renderDiscs } from "./render.js";

const productList = document.getElementById('product-list');

for (let renderDiscs of discs){
  const discCard = document.createElement('div');
  discCard.classList.add('disc-card');

  const discHeader = document.createElement('h2');
  discHeader.textContent = discs.name;

  const img = document.createElement('img');
  img.src = discs.img;

  discCard.append(discHeader, img);
  productList.append(discs);
}

