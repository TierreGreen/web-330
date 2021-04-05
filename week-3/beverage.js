/**
 * ========================================================
 * Title: Beverage JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 4, 2021
 * Description: beverage.js to be passed to the index file
 * ========================================================
 */

//imported product class
import { Product } from "./product.js";

//beverage class to be exported
export class Beverage extends Product {

    constructor(name, price) {

        super(name, price);
    }
}