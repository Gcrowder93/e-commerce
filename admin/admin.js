import { addProduct } from '../utils.js';

const form = document.getElementById('add-product');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newDisc = {
        id: data.get('id'),
        name: data.get('name'),
        stats: data.get('stats'),
        price: data.get('price'),
        image: data.get('image')

    }; 
    addProduct(newDisc);
    form.reset();
    alert('added');
});


