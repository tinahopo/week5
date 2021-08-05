"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$(document).ready(function () {
  $('.expand_less').hide();
  $('.expand_more').show();
  $('.expand').click(function (e) {
    e.preventDefault();
    $('.expand_less').show();
    $('.expand_more').hide();

    if ('aria-expanded=="true"') {
      $('.expand_less').show();
    } else {
      $('.expand_less').hide();
    } // if ('aria-expanded="false"') {
    //   $('.expand_more').show();
    // } else {
    //   $('.expand_more').hide();
    // }

  });
  $('.expand_less').toggleClass(active);
});
//# sourceMappingURL=all.js.map
