import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newDisc = {
        id: data.get('id'),
        name: data.get('name'),
        price: data.get('price')
    };  
    addProduct(newDisc);
    alert('added');
});


