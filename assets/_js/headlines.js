/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable quotes */

function returnSpaces(str) {
  return str.replace("__", " ");
}

(function($) {
  $(function() {
    $(document).ready(function() {
      let elements = document.querySelectorAll(".js-intro-quote");
      Array.prototype.forEach.call(elements, function(quote, i) {
        let words = $(quote)
          .text()
          .split(" ");
        $(quote).empty();
        words.forEach(function(v, i) {
          let word = returnSpaces(v);
          if (word === "Web3") {
            $(quote).append($('<span class="is-visible">').text(word));
          } else {
            $(quote).append($("<span>").text(word));
          }
        });
      });
      let random = Math.floor(Math.random() * $(".js-intro-quote").length);
      $(".js-intro-quote")
        .eq(random)
        .addClass("is-active");

      $(".js-intro-quote.is-active")
        .children("span")
        .mouseenter(function(event) {
          $(this).addClass("is-visible");
        });

      $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          $(".js-intro-quote.is-active")
            .children("span")
            .each(function(index, el) {
              let delayTime = Math.floor(Math.random() * 800 + 1);
              $(this)
                .delay(delayTime)
                .queue(function(next) {
                  $(this).addClass("is-visible");
                  next();
                });
            });
        }
      });
    });
  });
})(jQuery);
