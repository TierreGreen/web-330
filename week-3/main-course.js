/**
 * ========================================================
 * Title: MainCourse JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 4, 2021
 * Description: main-course.js to be passed to the index file
 * ========================================================
 */

//imported product class
import { Product } from "./product.js";

//appetizer class to be exported
export class MainCourse extends Product {

    constructor(name, price) {

        super(name, price);
    }
}