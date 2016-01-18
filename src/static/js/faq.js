$(document).ready(function() {
  new WOW().init();
});

$(".faq-q").click( function () {
  var container = $(this).parents(".faq-c");
  var answer = container.find(".faq-a");
  var trigger = container.find(".faq-t");
  answer.slideToggle("slow");
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
});
