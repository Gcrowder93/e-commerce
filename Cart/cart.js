
import { cart } from '../data/cart-data.js';
import { discs } from '../data/discs.js';
import { calculateOrderTotal, findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const discData = findById(cartItem.id, discs);

    const tr = renderLineItems(cartItem, discData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, discs);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = orderTotal;