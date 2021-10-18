export function findById(id, discs){
    for (let disc of discs){
        if (disc.id === id){
            return disc;
        }}}

export function calculateOrderTotal(cart, discs){
    let orderTotal = 0;
    for (let item of cart){
        const disc = findById(item.id, discs);
        orderTotal = orderTotal + disc.price * item.qty;
    }

    return orderTotal.toFixed(2);
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' }
    ); 
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;

}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}
import { discs } from './data/discs.js';

export function getProducts(){
    let lsProducts = localStorage.getItem('PRODUCTS');
    // should get PRODUCTS from local storage

    // if there ARE NO PRODUCTS in local storage-- seed the data
    if (!discs){
        const discsString = JSON.stringify(discs);
        localStorage.setItem('PRODUCTS', discsString);
    }
    return lsProducts || discs;
}

import { discs } from './data/discs.js';

export function addProduct(newDisc){
    let products = getProducts();
    products.push(newDisc);
    let productString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productString);
}
