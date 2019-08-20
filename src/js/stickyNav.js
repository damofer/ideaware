export default function() {
    let navbar = $('header');
    let sticky = navbar.offset().top;
    window.onscroll = function () {
        if (window.pageYOffset >= sticky) {
            navbar.addClass("sticky");
            $('.desktop-nav-logo').hide();
            $('.sticky-logo').show();
        } else {
            navbar.removeClass("sticky");
            $('.desktop-nav-logo').show();
            $('.sticky-logo').hide();
        }
    };
}
