"use strict";
export default function() {
    $('#toggle-menu').click(function(e){
        let x = document.getElementById("burgerNav");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    })

}
