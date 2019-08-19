"use strict";
export  function  increment(e_name){
    $(e_name).each(function(index){
        let el = this;
        $({someValue: 0}).animate({someValue: parseInt(this.innerHTML)}, {
            duration: 3000,
            easing:'swing', // can be anything
            step: function() { // called on every step
                // Update the element's text with Fixed  value:
                $(el).text(this.someValue.toFixed(0));
            },
            complete:function(){
                $(el).text(this.someValue.toFixed(0));

            }
        });
    });
}
