"use strict";
//import javascript from paths
import  {increment} from "./incrementalAnimation.js";
import  dropDown from "./dropdown.js";
import  slider from "./slider.js";
import  modalHandler from "./modalHandler.js";
import  toggleMenu from "./toggleMenu.js";

//inject into DOM when it's ready
$(document).ready(function(){
    toggleMenu();
    dropDown();
    increment('.incremental');
    slider();
    modalHandler();
});


