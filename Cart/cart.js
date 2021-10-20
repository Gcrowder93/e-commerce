

import { calculateOrderTotal, findById, getCart, getProducts, toUSD } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';
const discs = getProducts();
const cart = getCart();
const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const discData = findById(cartItem.id, discs);

    const tr = renderLineItems(cartItem, discData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, discs);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
});
