/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-var */
/* eslint-disable one-var */
/* eslint-disable curly */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function() {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  this.start = function() {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  this.reset = function(newT) {
    t = newT;
    return this.stop().start();
  };
}

var WindowW,
  WindowH,
  containerW,
  offsetX,
  offsetY,
  cursorX,
  cursorY,
  unit = 21,
  gutter = 7,
  BgW,
  BgH,
  gapX,
  gapY,
  messageHovered = false,
  timeout,
  randomInteraction;

(function($, root, undefined) {
  "use strict";

  $(document).ready(function() {
    randomInteraction = Math.floor(Math.random() * 3) + 1;
    randomInteraction = 1;

    switch (randomInteraction) {
      case 1:
        interaction1();

        break;
      case 2:
        interaction2();
        break;
      case 3:
        interaction3();
        break;
      default:
    }

    $(".jsMessage").on("touchstart touchmove touchmend click", function(event) {
      // removeInteraction();
    });
  });

  var defWindowVars = function() {
    WindowW = $(window).width();
    WindowH = $(window).height() / 2;
  };

  var setBgSize = function(initial = false) {
    defWindowVars();
    BgW = Math.floor(WindowW / unit) * unit;
    BgH = Math.floor(WindowH / unit) * unit;
    gapX = WindowW - BgW;
    gapY = WindowH - BgH;

    if (gapX >= 2 * gutter) BgW = BgW + gutter;
    else BgW = BgW - 2 * gutter;
    if (gapY >= 2 * gutter) BgH = BgH + gutter;
    else BgH = BgH - 2 * gutter;

    gapX = (WindowW - BgW) / 2;
    gapY = (WindowH - BgW) / 2;

    offsetX = (WindowW - BgW) / 2;
    offsetY = (WindowH - BgH) / 2;

    // if (initial) $(".jsBg").hide();
    $(".jsBg")
      .width(BgW)
      .height(BgH);
  };

  var interaction1 = function() {
    timer.start();
    $(".jsBody").addClass("is-interaction1");
    $(document).on("mousemove", function(event) {
      $(".jsBg")
        .stop(true, true)
        .fadeTo(100, 1, function() {});
      $(".jsBg").show();
      var initialW = cursorX - offsetX;
      containerW = Math.floor(initialW / unit) * unit + unit;
      $(".jsBgContainer").width(containerW - 2);

      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(function() {
        timer.start();
      }, 100);
    });
  };

  var removeInteraction = function() {
    $(".jsMessage").fadeTo(1, 0, function() {});
    $(".jsIntroBody")
      .delay(200)
      .fadeTo(400, 0, function() {
        $(this).remove();
        $(".ui-page-theme-a")
          .contents()
          .unwrap();
        $(".ui-loader").remove();
      });
  };

  $(window).on("load", function() {
    setBgSize(true);
  });

  $(window).resize(function() {
    setBgSize();
  });

  $(document).on("mousemove", function(event) {
    timer.stop();
    cursorX = event.pageX;
    cursorY = event.pageY;
  });

  function addListenerMulti(el, s, fn) {
    s.split(" ").forEach(e => el.addEventListener(e, fn, false));
  }

  addListenerMulti(document, "touchstart touchmove touchmend", function(e) {
    timer.stop();
    cursorX = e.touches[0].pageX;
    cursorY = e.touches[0].pageY;
  });

  $(".jsMessage")
    .mouseenter(function() {
      messageHovered = true;
      $(".jsBgContainerStatic").fadeTo(200, 1, function() {});
      $(".jsBgMask")
        .stop(true, true)
        .fadeTo(200, 0, function() {});
    })
    .mouseleave(function() {
      messageHovered = false;
      $(".jsBgContainerStatic").fadeTo(200, 0, function() {});
    });

  var timer = new Timer(function() {
    timer.stop();
    // $(".jsBg")
    //   .stop(true, true)
    //   .fadeTo(1000, 0, function() {});
  }, 2000);
})(jQuery, this);
