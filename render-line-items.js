
export function renderLineItems(cartItem, discData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = discData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = discData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');

    const total = cartItem.qty * discData.price;
    tdTotal.textContent = (total);
    
    tr.append(tdName, tdPrice, tdQty, tdTotal);
    return tr;

}