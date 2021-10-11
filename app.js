import { discs } from "./discs.js";
import { renderDiscs } from "./render.js";

const productList = document.getElementById('product-list');

for (let renderDisc of discs){
    const discsCard = renderDiscs(renderDisc);
    productList.append(discsCard);
}
