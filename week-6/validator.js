/**
 * ========================================================
 * Title: validator JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: validator js to be passed to the index file
 * ========================================================
 */

//importing all other js files
import { RequiredField } from "./required-field.js" 

import { FloatField } from "./float-field.js"

import { FloatMinField } from "./float-min-field.js"

import { FloatMaxField } from "./float-max-field.js"

export class Validator{
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field; 
    }
    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    validate(){
        for (let validator of this.validators) { 
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
                return false;
            }
            
        }
        return true;
    }
}