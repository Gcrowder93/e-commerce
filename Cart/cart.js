
import { cart } from '../data/cart-data.js';
import { discs } from '../data/discs.js';
import { findById } from '../utils.js';
import { calcOrderTotal, toUSD } from '../utils.js';
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
        tdTotal.textContent = `$${cartItem.qty * discData.price}`;
        tr.append(tdName, tdPrice, tdQty, tdTotal);
        tbody.appendChild(tr);
    }
}

const orderTotal = calcOrderTotal(cart, discs);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);