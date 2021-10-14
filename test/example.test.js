import { addItem, getCart } from "../utils";

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
