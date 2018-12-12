

// ON CLICK OPEN RESUME
$('.about-block, .menu-item.about').on('click', function() {
    $('.content-pages').removeClass('showx');
    $('.content-pages.about').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.about').addClass('active');
});

// ON CLICK OPEN CONTACT PAGE
//On Click Open Contact Block
$('.contact-block, .menu-item.contact').on('click', function() {
    $('.content-blocks').removeClass('showx');
    $('.content-blocks.contact').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.contact').addClass('active');
});