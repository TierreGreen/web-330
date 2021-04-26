/**
 * ========================================================
 * Title: Required-Field JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: RequiredField js to be passed to the index file
 * ========================================================
 */

//RequiredField class to be exported
export class RequiredField {

    constructor(name, field) {

        this.name = name;
        this.field = field;
    }

    validate() {

        return this.field = true

    }

    getMessage() {
        return this.name + " is a required field.";
    }
}

