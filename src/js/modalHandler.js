"use strict";

export default function() {
    $('#modal-trigger').click(function (e) {
        console.log('click');
        //Cancel default behavior
        e.preventDefault();
        //Get the A tag
        let id = $(this).attr('href');

        //Get the screen height and width
        let maskHeight = $(document).height();
        let maskWidth = $(window).width();

        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        //transition effect
        $('#mask').fadeIn(300);
        $('#mask').fadeTo("slow",0.8);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(2000);

    });

    function hideAll(){
        let video = $("#player").attr("src");
        $("#player").attr("src","");
        $("#player").attr("src",video);
        $('#mask, .dialog').hide();
    }
    //if close button is clicked
    $('.dialog .close, #mask').click(function (e) {
        //Cancel defautt behavior
        e.preventDefault();
        hideAll();
    });




}
