import $ from 'jquery';

export default () => {
/* eslint-disable */
  $(() => {
    $("a[href^='#']").click(function() {
      const href = $(this).attr("href");
      $('html, body').animate({ scrollTop: $(href).offset().top + 'px'}, 1000);
      return false;
    });
  });
  /* eslint-enable */
};
