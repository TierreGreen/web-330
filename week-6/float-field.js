/**
 * ========================================================
 * Title: float field JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: FloatField js to be passed to the index file
 * ========================================================
 */

//FloatField class to be exported
export class FloatField {

    constructor(name, field) {

        this.name = name;
        this.field = field;
    }

    validate(name) {
        return !isNan(parseFloat(this.field));
    }

    getMessage() {

        return `${this.name} must be a float value. You entered ${this.field}`
    }
}