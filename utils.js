export function findById(id, discs){
    for (let disc of discs){
        if (disc.id === id){
            return disc;
        }}}
export function calcOrderTotal(cart, discs){
    let orderTotal = 0;
    for (let item of cart){
        const disc = findById(item.id, discs);
        orderTotal = orderTotal + disc.price * item.qty;
    
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' }
    ); 
}
