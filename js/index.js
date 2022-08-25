console.log("Connected");

/* $(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
}); */

/////////ILLUSTRATED
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".illustrated");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
/////VIDEO
$(document).on("scroll", function () {
  var pageTop2 = $(document).scrollTop();
  var pageBottom2 = pageTop2 + $(window).height();
  var tags2 = $(".video-section");

  for (var i = 0; i < tags2.length; i++) {
    var tag2 = tags2[i];

    if ($(tag2).position().top < pageBottom2) {
      $(tag2).addClass("visible");
    } else {
      $(tag2).removeClass("visible");
    }
  }
});
////// CASE STUDY
$(document).on("scroll", function () {
  var pageTop3 = $(document).scrollTop();
  var pageBottom3 = pageTop3 + $(window).height();
  var tags3 = $(".case-study");

  for (var i = 0; i < tags3.length; i++) {
    var tag3 = tags3[i];

    if ($(tag3).position().top < pageBottom3) {
      $(tag3).addClass("visible");
    } else {
      $(tag3).removeClass("visible");
    }
  }
});
/////// FACTS
$(document).on("scroll", function () {
  var pageTop4 = $(document).scrollTop();
  var pageBottom4 = pageTop4 + $(window).height();
  var tags4 = $(".facts-section");

  for (var i = 0; i < tags4.length; i++) {
    var tag4 = tags4[i];

    if ($(tag4).position().top < pageBottom4) {
      $(tag4).addClass("visible");
    } else {
      $(tag4).removeClass("visible");
    }
  }
});
////////FEATURES
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".feat-enter");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".feat-highlights");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

///////////////// FACTS - WORDS TYPING
var words = [
    "Completely Automatic",
    "Limitlessly Scalable",
    "Generalizable",
    "Comprehensive",
    "Easy to Use",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 20,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".facts-js").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

////////////////////////////////////////////////
////// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
