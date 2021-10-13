export function findById(id, discs){
    for (let disc of discs){
        if (disc.id === id){
            return disc;
        }}}
 lab-07-demo

        
export function calculateOrderTotal(cart, discs) {

export function calcOrderTotal(cart, discs){
>>>>>> main
    let orderTotal = 0;
    for (let item of cart){
        const disc = findById(item.id, discs);
        orderTotal = orderTotal + disc.price * item.qty;
 lab-07-demo
    }
    return orderTotal;
}

    
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' }
    ); 
}
 main
