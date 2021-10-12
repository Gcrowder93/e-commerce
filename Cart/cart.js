
import { cart } from '../data/cart-data.js';
import { discs } from '../data/discs.js';
import { findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const discData = findById(cartItem.id, discs);
    const tr = renderLineItems(cartItem, discData);
    tbody.appendChild(tr);
    
}
renderLineItems(cartItem, discData);
{const tbody = document.getElementById('table-body');
    for (let cartItem of cart){
        const discData = findById(cartItem.id, discs);
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = discData.name;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = discData.price;
        const tdQty = document.createElement('td');
        tdQty.textContent = cartItem.qty;
        const tdTotal = document.createElement('td');
        tdTotal.textContent = `$${cartItem.qty * discData.price}.00`;
        tr.append(tdName, tdPrice, tdQty, tdTotal);
        tbody.appendChild(tr);
    }
}