"use strict";

export default function() {
    let $num = $('.card').length;
    let $even = $num / 2;
    let $odd = ($num + 1) / 2;
    if ($num % 2 == 0) {
        $('.card:nth-child(' + $even + ')').addClass('card-active');
        $('.card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.card:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.card:nth-child(' + $odd + ')').addClass('card-active');
        $('.card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.card:nth-child(' + $odd + ')').next().addClass('next');
    }
    $('.card').click(function() {
        let $slide = $('.card-active').width() + 80; //+ (margin + padding)
        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({left: '-=' + $slide });
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
        }
        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev card-active next');
        $(this).addClass('card-active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });
}

