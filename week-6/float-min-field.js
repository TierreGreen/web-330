/**
 * ========================================================
 * Title: Float-Min-Field JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: FloatMinField js to be passed to the index file
 * ========================================================
 */

//FloatMinField class to be exported
export class FloatMinField {

    constructor(name, field, min) {

        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {

        let floatField = parseFloat(this.field);
        return floatField > this.min;

    }

    getMessage() {

        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;

      }

}