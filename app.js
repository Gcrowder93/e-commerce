import { discs } from "./discs";

const productList = document.getElementById('product-list');

for (let disc of discs){
  const discCard = document.createElement('div');
  discCard.classList.add('disc-card');

  const discHeader = document.createElement('h2');
  discHeader.textContent = disc.name;

  const img = document.createElement('img');
  img.src = disc.img;

  discCard.append(discHeader, img);
  productList.append(discCard);
}