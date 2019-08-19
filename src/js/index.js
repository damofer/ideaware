"use strict";

import  {increment} from "./incrementalAnimation.js";
import  dropDown from "./dropdown.js";
import  slider from "./slider.js";

$(document).ready(function(){
    dropDown();
    increment('.incremental');
    slider();


});

function toggleMenu() {
    let x = document.getElementById("burgerNav");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
