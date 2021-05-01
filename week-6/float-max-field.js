/**
 * ========================================================
 * Title: Float-Max-Field JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: FloatMaxField js to be passed to the index file
 * ========================================================
 */

import { FloatField } from "./float-field";

//FloatMaxField class to be exported
export class FloatMaxField {

    constructor(name, field, max) {

        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {

        let floatField = parseFloat(this.field);
        return floatField < this.max;

    }

    getMessage() {

        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;

    }
}