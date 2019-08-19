"use strict";

export default function() {

    /*Search*/
    $("#industry-search__input").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    /*dropdown*/
    $('.dropdown .select').click(function (e) {
        $(this).parent().attr('tabindex', 1).focus();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.dropdown-menu').slideToggle(300);
    });

    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input[type="hidden"]').attr('value', $(this).attr('id'));
        $(this).parents('.dropdown').removeClass('active');
        $(this).parents('.dropdown').find('.dropdown-menu').slideToggle(300);
    });



}
