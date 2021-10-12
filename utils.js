export function findById(id, discs){
    for (let disc of discs){
        if (disc.id === id){
            return disc;
        }}}

        
export function calculateOrderTotal(cart, discs) {
    // initialize variable to keep track of total
    // loop through the cart items
    // get the associated disc from list
    // add the qty * price to the total
    // return the total
    let orderTotal = 0;
    for (let item of cart){
        const disc = findById(item.id, discs);
        orderTotal = orderTotal + disc.price * item.qty;
    }
    return orderTotal;

}