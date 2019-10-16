/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

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

require("./headlines");
require("./w3s-intro/main");
