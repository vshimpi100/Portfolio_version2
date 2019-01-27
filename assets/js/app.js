// FIXED ACTION BUTTON
$(document).ready(function () {
    // Set up fixed action button functionality
    $('.fixed-action-btn').floatingActionButton();
    $('.parallax').parallax();
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

// materialize card open on hover
$(function () {
    $('.card').hover(
        function () {
            $(this).find('> .card-image > img.activator').click();
        },
        function () {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});

// text area auto resize
$('#message').val('');
M.textareaAutoResize($('#message'))