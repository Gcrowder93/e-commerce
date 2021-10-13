import { discs } from './data/discs.js';
import { renderDiscs } from './render.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let disc of discs){
    const discsCard = renderDiscs(disc);
    console.log(discsCard);
    productList.append(discsCard);
}

const addButtons = document.querySelectorAll('.add-button');
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);

    });
}

