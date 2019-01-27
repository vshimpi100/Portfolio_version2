// FIXED ACTION BUTTON
$(document).ready(function () {
    // Set up fixed action button functionality
    $('.fixed-action-btn').floatingActionButton();

    // $('.parallax').parallax();

    // Set up pushpin functionality
    $('.pushpin').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });
});


// Nav and header fade
var header = $('header');
var range = 200;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 1.1,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({
        'opacity': calc
    });

    if (calc > '1') {
        header.css({
            'opacity': 1
        });
    } else if (calc < '0') {
        header.css({
            'opacity': 0
        });
    }

});

