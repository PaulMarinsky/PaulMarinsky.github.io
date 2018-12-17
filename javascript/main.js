$(document).ready(function () {

    //On Click Open Contact Block
    $('.contact-block, .menu-item.contact').click(function () {
        $('.content-blocks').removeClass('show');
        $('.content-blocks.contact').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.contact').addClass('active');
    });

    //On Click Open About/Resume Block
    $('.about-block, .menu-item.about').click(function () {
        $('.content-blocks').removeClass('show');
        $('.content-blocks.about').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.about').addClass('active');
    });
});
/*
    //On Click Open Menu Items
    $('.menu-block, .menu-item').click(function () {
        $('.name-block').addClass('reverse');
        $('.name-block-container').addClass('reverse');
        $('.menu-blocks').addClass('hide');
        $('.inline-menu-container').addClass('show');
    });
*/
/*
(function ($) {
    "use strict";
    
    $('.portfolio-block, .menu-item').on('click', function () {
    
        //Portfolio masonry
        var $container = $('#portfolio-container');
        $container.isotope({
            masonry: {
                columnWidth: '.portfolio-item'
            },
            itemSelector: '.portfolio-item'
        });
        $('#filters').on('click', 'li', function () {
            $('#filters li').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
    });
    
    //On Click Open Menu Items
$('.menu-block, .menu-item').click(function () {
    $('.name-block').addClass('reverse');
    $('.name-block-container').addClass('reverse');
    $('.menu-blocks').addClass('hide');
    $('.inline-menu-container').addClass('show');
});
    
    //Portfolio Modal
    $(document).on('click', '.open-project', function () {
        var projectUrl = $(this).attr("href");
        $('.inline-menu-container').removeClass('show');
        $('.sidebar-menu').addClass('hide');
        $('.content-blocks.pop').addClass('show');
        $('.content-blocks.pop section').load(projectUrl + ' .load-data > *');
        return false;
    });
    
    //Blog post Modal
    $('.open-post').on('click', function () {
        var postUrl = $(this).attr("href");
        $('.inline-menu-container').removeClass('show');
        $('.sidebar-menu').addClass('hide');
        $('.content-blocks.pop').addClass('show');
        $('.content-blocks.pop section').load(postUrl);
        return false;
    });
    
    
   
    //On Click Open Portfolio Block
    $('.portfolio-block, .menu-item.portfolio').on('click', function () {
        $('.content-blocks').removeClass('show');
        $('.content-blocks.portfolio').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.portfolio').addClass('active');
    });
    //On Click Open Blog Block
    $('.blog-block, .menu-item.blog').on('click', function () {
        $('.content-blocks').removeClass('show');
        $('.content-blocks.blog').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.blog').addClass('active');
    });
    
 
    
    //On Click Close Blocks
    $('#close').on('click', function () {
        $('.name-block').removeClass('reverse');
        $('.name-block-container').removeClass('reverse');
        $('.content-blocks').removeClass('show');
        $('.menu-blocks').removeClass('hide');
        $('.inline-menu-container').removeClass('show');
        $('.menu-item').removeClass('active');
    });
    //On Click Close Blog Post And Project Details
    $('#close-pop').on('click', function () {
        $('.content-blocks.pop').removeClass('show');
        $('.sidebar-menu').removeClass('hide');
        $('.inline-menu-container').addClass('show');
        $('.content-blocks.pop section').empty();
    });
    
    $('.menu-block, .menu-item, #close').on('click', function () {
        $('.content-blocks').animate({
            scrollTop: 0
        }, 800);
    });
    
    // Intialize Map
    google.maps.event.addDomListener(window, 'load', init);
    
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
    
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400),
    
            scrollwheel: false,
    
    
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                featureType: 'all',
                stylers: [{
                    saturation: -65
                }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                    hue: '#00ffee'
                }, {
                    saturation: 80
                }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }]
        };
    
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
    
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    
        var image = 'images/map-marker.png';
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            icon: image,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', toggleBounce);
    
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
    }
})(jQuery);
*/