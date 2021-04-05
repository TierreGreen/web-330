/**
 * ========================================================
 * Title: Bill JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 4, 2021
 * Description: bill.js to be passed to the index file
 * ========================================================
 */



//bill class to be exported with all menu items
export class Bill {
    
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {

    this._beverages = [];

    this._appetizers = [];
    
    this._mainCourses = [];

    this._desserts = [];
    }

//function for adding beverage
    addBeverage(beverage) {

        this._beverages.push(beverage);

    }

//function for adding appetizer

    addAppetizer(appetizer) {

        this._appetizers.push(appetizer);
    }

//function for adding main-courses

    addMainCourse(mainCourse) {

        this._mainCourses.push(mainCourse)
    }

//function for adding desserts

    addDessert(dessert) {

        this._desserts.push(dessert)
    }

//get total function
    getTotal() {

    //total variable defaulted to zero
        let total = 0;

    //beverage total added to final order cost
        let beverageTotal = this._beverages.forEach(function(beverage) {

            total += parseFloat(beverage.price);
        });

    //appetizer total added to final order cost
        let appetizerTotal = this._appetizers.forEach(function(appetizer) {

            total += parseFloat(appetizer.price);
        });

    //main course total added to final order cost
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {

            total += parseFloat(mainCourse.price);
        });

    //dessert total added to final order cost
        let dessertTotal = this._desserts.forEach(function(dessert) {

            total += parseFloat(dessert.price);
        });

        console.log(`The TOtal is ${total}`);
    //total returned with the maximum decimal point of 2 digits.
        return total.toFixed(2);
    }
}