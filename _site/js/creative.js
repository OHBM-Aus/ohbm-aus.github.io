/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

document.addEventListener('DOMContentLoaded', function() {
    var wrappers = document.querySelectorAll('.collapsible-wrapper');

    wrappers.forEach(function(wrapper) {
        var button = wrapper.querySelector('.collapsible-button');
        var content = wrapper.querySelector('.collapsible-content');
        var marker = wrapper.querySelector('.collapsible-marker');

        button.addEventListener('click', function() {
            content.classList.toggle('active');
            marker.classList.toggle('fa-chevron-down');
            marker.classList.toggle('fa-minus');
        });
    });


    const toast = document.getElementById("toast-notif");
    toast.classList.add("toast-show");
    setTimeout(closeToast, 5000);
});

function closeToast() {
    const toast = document.getElementById("toast-notif");
    toast.classList.remove("toast-show");
}
