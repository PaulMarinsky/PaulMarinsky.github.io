$(document).ready(function () {

    //On Click Open Contact Block
    $('.contact-block, .menu-item.contact').click(function () {
        $('.name-block').addClass('hide');
        $('.content-blocks').removeClass('show');
        $('.content-blocks.contact').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.contact').addClass('active');
    });

    //On Click Open About/Resume Block
    $('.about-block, .menu-item.about').click(function () {
        $('.name-block').addClass('hide');
        $('.content-blocks').removeClass('show');
        $('.content-blocks.about').addClass('show');
        $('.menu-item').removeClass('active');
        $('.menu-item.about').addClass('active');
    });

    //On Click Go Home
    $('#home').on('click', function () {
        $('.name-block').removeClass('hide');
        $('.content-blocks').removeClass('show');
        $('.menu-item').removeClass('active');
        $('#home').addClass('active');
    });

     //On Click Open Portfolio 
     $('.portfolio-block, .menu-item.portfolio').on('click', function () {
        $('.name-block').addClass('hide');
	    $('.content-blocks').removeClass('show');
	    $('.content-blocks.portfolio').addClass('show');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.portfolio').addClass('active');
	});

    // Still working to code portfolio page
    // Still need to resolve categorical filtering and formatting of overlay images
   
});
