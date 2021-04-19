/**
*===========================================
* Title: Assignment 5.2
* Author: Professor Richard Krasso
* Modified by: Tierre Green
* Date: 4/18/2021
* Description: Shopping cart.js
*===========================================
*/

//ShoppingCart class.
export class ShoppingCart {

//Products constructor
    constructor(_products) {

        this._products = [];
    }


    count() {

    // console log to make sure product is passing to the cart
        console.log(`The products array contains: [${this._products}]`);
        return this._products.length;
        
    }

// addProduct() function for product array
    addProduct(product) {

        this._products.push(product);
    }


//iterator
    * myIterator() {

        for (let product of this._products) {
            document.getElementById('productID').innerHTML = 'testid';
            document.getElementById('productName').innerHTML = 'testname';
            document.getElementById('productValue').innerHTML = 'testvalue';
            yield product;
        }
    }
}