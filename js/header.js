$(document).ready(function() {
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    $(window).on('resize', function() {
        if ($(window).width() >= 992) {
            $('.navbar-collapse').removeClass('show');
        }
    });

    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('active');
    });
}); 