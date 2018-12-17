import $ from 'jquery';

export default () => {
/* eslint-disable */
  $(() => {
  
    $(window).scroll(function() {
      if($(this).scrollTop() !== 0) {
        $('#toTop').fadeIn();
      } else {
      $('#toTop').fadeOut();
      }
    });
    $('#toTop').click(() => {
      $('body,html').animate({scrollTop: 0},800);
    });
  });
/* eslint-enable */
};
