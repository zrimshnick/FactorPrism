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
