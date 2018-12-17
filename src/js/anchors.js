import $ from 'jquery';

export default () => {
/* eslint-disable */
  $(() => {
    $("a[href^='#']").click(function() {
      const href = $(this).attr("href");
      const scrollValue = $(href).offset().top - 140;
      $('html, body').animate({ scrollTop: scrollValue + 'px'}, 1000);
      return false;
    });
  });
  /* eslint-enable */
};
