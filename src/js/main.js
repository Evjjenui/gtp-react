var initCarousel, initUi;

initCarousel = function() {
  $('.component-advantages .content-wrapper').slick({
    responsive: [
      {
        breakpoint: 2560,
        settings: "unslick"
      }, {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};

initUi = function() {
  $('.browser-alert .close').on('click', function(event) {
    var alertBlock;
    alertBlock = $(this).closest('.browser-alert');
    alertBlock.slideUp();
    alertBlock.addClass('hide');
  });
  $('.header_market .icon, .header_user-name .icon').on('click', function(event) {
    $(this).parent().toggleClass('active');
    return $('.header_drop').stop().slideToggle();
  });
  return $('.popup .close').on('click', function(event) {
    return $(this).closest('.popup-overlay').hide();
  });
};

$(function() {
  return initUi();
});
