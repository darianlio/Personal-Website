/*jslint browser: true*/
/*global $, jQuery, alert*/
$('.nav').localScroll();
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});