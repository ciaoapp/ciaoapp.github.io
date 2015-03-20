/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var sections = $('.navbar-nav li a');
    var current_section = -1;
    var node;
    $(document).keydown(function(e){
        
        switch(e.which){
            case 40: //down arrow key
                e.preventDefault();
                node = sections[++current_section];
                if(node){
                    $('html, body').stop().animate({
                        scrollTop: $(node.getAttribute('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                } else
                    current_section = sections.length-1;
                break;
            case 38: //up arrow key
                e.preventDefault();
                node = sections[--current_section];
                if(node){
                    $('html, body').stop().animate({
                        scrollTop: $(node.getAttribute('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                } else
                    current_section = 0;
                break;
        }

    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//carousel swipe detection npm package
$("#myCarousel").carousel();
