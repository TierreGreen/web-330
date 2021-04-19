/**
*===========================================
* Title: Assignment 5.2
* Author: Professor Richard Krasso
* Modified by: Tierre Green
* Date: 4/18/2021
* Description: Product class per instructions
*===========================================
*/

// product exported for placement in the cart.
export class Product {
    constructor(name, price) {
            this.name = name;
            this.price = price;
            this.id = Math.random().toString(16).slice(2);
        };
};