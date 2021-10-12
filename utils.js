export function findById(id, discs){
    for (let disc of discs){
        if (disc.id === id){
            return disc;
        }}}

        
export function calculateOrderTotal(cart, discs) {
    console.log(discs);
    let orderTotal = 0;
    for (let item of cart){
        const disc = findById(item.id, discs);
        orderTotal = orderTotal + disc.price * item.qty;
    }
    return orderTotal;
}
