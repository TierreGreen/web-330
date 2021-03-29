/**
 * Title: Assignment 2.2 Palindrome App
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: March 27, 2021
 * Description: Palindrome App js file.
 */

/**
 * Title: JavaScript String split() Method
 * Author: https://www.w3schools.com/jsref/jsref_split.asp
 * Modified by: Tierre Green
 * Date: March 27, 2021
 * Description: splitting string.
 */

/**
 * Title: JavaScript Array reverse() Method
 * Author: https://www.w3schools.com/jsref/jsref_reverse.asp
 * Modified by: Tierre Green
 * Date: March 28, 2021
 * Description: reversing an array.
 */

/**
 * Title: JavaScript Array reverse() Method
 * Author: https://www.w3schools.com/jsref/jsref_reverse.asp
 * Modified by: Tierre Green
 * Date: March 28, 2021
 * Description: reversing an array.
 */

//to get the date for today.
function getTodaysDate() {

            let today = new Date();
            let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
            document.getElementById("assign-results").innerHTML = `Date: ${date}`;
            return date;
        }
    
    // this gets the length of the given string
        function getLength(string) {

            let stringLength = string.length;
            return stringLength;
        }

    // function reverses string 
        function reverse(string) 
        {
            let splitString = string.split("")
            let reverseString = splitString.reverse();
            let combine = reverseString.join("");
            return combine.toLowerCase();
        }

    // palindrome function determines if the reversed string is equal to the original string
        function isPalindrome(string)
        {
            let result = '';
            if (string === reverse(string)) {
                result = string + " <u><b>is</b></u> " + "a palindrome!";
            } else {
                result = string + " <u><b>is not</b></u> " + "a palindrome!";
            }
            document.getElementById("assign-results-header").innerHTML = result;
        }

    //this function pass the list through the text string
        function phraseCheck() {

        // txtPhrase is whatever the user inputs into the txtPhrase form-field.
            let txtPhrase = document.getElementById("txtPhrase").value.toLowerCase();  

        // will get todays date.
            const today = getTodaysDate();
            
            const phraseLength = getLength(txtPhrase);

        // reverses the string the user puts in. 
            let reversedPhrase = reverse(txtPhrase);

        // list of all outputs onclick to display in the results area.
            let header = "Date: " + today + "<br>" + "Original Phrase: " + txtPhrase + "<br>" + 
                        "Reversed Phrase: " + reversedPhrase + "<br>" + "Phrase Length: " + phraseLength;

        // Displays header to the HTML.
            document.getElementById("assign-results").innerHTML = header;

        //palindrome function passed through user input string.
            isPalindrome(txtPhrase);                
        }

