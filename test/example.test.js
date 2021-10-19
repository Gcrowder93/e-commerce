import { addItem, addProduct, getCart, getProducts } from '../utils.js';

const test = QUnit.test;

test('', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('addItem should add an item if its not already there', (expect)=>{
    localStorage.removeItem('CART');

    addItem('1');
    const cart = getCart();
    const expected = [{ id: '1', qty:1 }];

    expect.deepEqual(cart, expected);
});

test('the addProduct should add a product to the products array', (expect)=>{
    let products = getProducts();
    const newProduct = {
        id: '6',
        name: 'Prodigy',
        stats: '4, 2, -2, 4',
        img: '/assets/prodigy.webp',
        price: '19.99'
    };

    addProduct(newProduct);

    products = getProducts();
    expect.equal(products.length);
});