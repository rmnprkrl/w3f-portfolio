/* eslint-disable no-unused-lets */
/* eslint-disable quotes */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* no-invalid-this */

require("intersection-observer");
import $ from "jquery";
import jQuery from "jquery";
window.$ = $;
window.jQuery = jQuery;

import vhCheck from "vh-check";
import AOS from "aos";
import SimpleParallax from "simple-parallax-js";

vhCheck();
AOS.init({
  duration: 1100,
  once: false,
  disable: false
});

let image = document.getElementsByClassName("parallax");
new SimpleParallax(image, {
  scale: 1.6,
  delay: 1
});

$("video").each(function(index, e) {
  let video = e;
  let promise = video.play();
  if (promise !== undefined) {
    promise
      .then(_ => {
        // Autoplay started!
      })
      .catch(error => {
        // Show something in the UI that the video is muted
        video.muted = true;
        video.play();
      });
  }
});

require("./headlines");
require("./w3s-intro/main");
