/*
=====================================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Modified By: Tierre
; Date: April 11, 2021
; Description: calorie converter for assignment 4.2
=====================================================
*/

//class will be exported.

//Import FoodModel Statement
import { FoodModel } from "./food-model.js";

//calory converter class
export class CalorieConverter {

    static data = [

    //FoodModel objects.
        new FoodModel (1007, "Egg", 78),
        new FoodModel (1008, "Apple", 95),
        new FoodModel (1009, "Hamburger", 345),
        new FoodModel (1010, "Fries", 400),
        new FoodModel (1111, "Banana", 105),
        new FoodModel (1012, "Soda", 150)
    ];

//static function that produces food model object.
    static find(name) {

    //return string called through static function
        return this.data.filter(data => foodModel.name.toLowerCase().includes(name));
    }
}

const foodItemName = CalorieConverter.data;  // call the static composers variable from the ComposerService class.

console.log('\n--  Displaying a list of data --');

// using a for...of loop, iterate over the array and output the results. 
for (let data of foodItemName)
{
    console.log(`First Name: ${composer.firstName}\nLast Name: ${composer.lastName}\n`);
} // end for loop