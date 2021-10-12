import { discs } from '../data/discs.js';
import { cart } from '..data/cart-data.js';
import { findById } from '..utils.js';
{const tbody = document.getElementById('table-body');
    for (let cartItem of cart){
        const discData = findById(cartItem.id.discs);
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = discData.name;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = discData.price;
        const tqQty = document.createElement('td');
        tdQty.textContent = cartItem.qty;
        const tdTotal = document.createElement('td');
        tdTotal.textContent = cartItem.qty * discData.cartItem;

        tr.append(tdName, tdPrice, tdQty, tdTotal);
        tbody.appendChild(tr);
    }
}