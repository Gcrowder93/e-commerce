import { toUSD } from './utils.js';

export function renderLineItem(cartItem, discData) {
    const tr = document.createElement('tr');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    const total = cartItem.qty * discData.price;
    tdTotal.textContent = toUSD(total);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}