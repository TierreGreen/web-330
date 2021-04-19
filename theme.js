/**
;Title:Assignment 1.3
;Author: Richard Krasso
;Modified by: Tierre Green
;Date: March 21, 2021
;Description: Assignment 1.3 JavaScript
*/

/**
;Title: How TO - Toggle Dark Mode
;Author: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
;Modified by: Tierre Green
;Date: March 21, 2021
;Description: toggling black and white background
*/

/**
;Title: How TO - Toggle Like and Dislike
;Author: https://www.w3schools.com/howto/howto_js_toggle_like.asp
;Modified by: Tierre Green
;Date: March 21, 2021
;Description: toggling like dislike
*/


setDefaultTheme();

// set default theme function to what the user typically does pulled from browser settings.
function setDefaultTheme() {

    // declaring variables theme iconMode and iconText for localStorage get item.
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    // saves modes and thems in browser storage.
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

function toggleMode(x) {  
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;
    
    // if else statements toggling from dark to light.
    if (document.body.classList.value === "dark-theme") {

        // set the theme to dark mode
        document.body.classList.value = "light-theme";

       // change of visual portrayal. 
        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"

        localStorage.setItem("colorTheme", "light-theme")
        localStorage.setItem("iconText", "Light Mode")
        localStorage.setItem("iconMode", "fa-toggle-on")
        
    } else {

        // toggles from light to dark theme based on all else principle 
        document.body.classList.value = "dark-theme";

        // change of visual portrayal. 
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"

        localStorage.setItem("colorTheme", "dark-theme")
        localStorage.setItem("iconText", "Dark Mode")
        localStorage.setItem("iconMode", "fa-toggle-on")

    }
}