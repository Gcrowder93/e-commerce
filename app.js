import { discs } from './data/discs.js';
import { renderDiscs } from '../render.js';

const productList = document.getElementById('product-list');

for (let disc of discs){
    const discsCard = renderDiscs(disc);
    productList.append(discsCard);
}
