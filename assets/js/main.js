// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) {
  'use strict';

  var Hero = {
    getDebounce: function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    getSlick: function($method) {
      $('[data-init="slick"]').each(function () {
        var el = $(this);

        var breakpointsWidth = { tn: 319, xs: 479, ss: 519, sm: 767, md: 991, lg: 1199 };

        var slickDefault = {
          dots: true,
          arrows: false,

          fade: true,
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          speed: 1000,
          adaptiveHeight: true,

          slidesToShow: 1,
          slidesToScroll: 1,

          mobileFirst: true
        };

        // Merge settings.
        var settings = $.extend(slickDefault, el.data());
        delete settings.init;

        // Build breakpoints.
        if (settings.breakpoints) {
          var _responsive = [];
          var _breakpoints = settings.breakpoints;

          var buildBreakpoints = function buildBreakpoints(key, show, scroll) {
            if (show !== 0) {
              if (breakpointsWidth[key] != 991 && breakpointsWidth[key] != 1199) {
                _responsive.push({
                  breakpoint: breakpointsWidth[key],
                  settings: {
                    slidesToShow: parseInt(show),
                    slidesToScroll: 1
                  }
                });
              } else {
                _responsive.push({
                  breakpoint: breakpointsWidth[key],
                  settings: {
                    slidesToShow: parseInt(show),
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                  }
                });
              }
            };
          };

          if ((typeof _breakpoints === 'undefined' ? 'undefined' : _typeof(_breakpoints)) === "object") {
            $.each(_breakpoints, buildBreakpoints);
          }

          delete settings.breakpoints;
          settings.responsive = _responsive;
        };

        if ($method != 'unslick') el.slick(settings);else el.slick($method);
      });
    },

    getYoutubePlayer: function() {
      $('[data-video="youtube"]').each(function() {
        $(this).YTPlayer({
          showControls: false
        });
      });
    },

    getVimeoPlayer: function() {
      $('[data-video="vimeo"]').each(function() {
        $(this).vimeo_player({
          showControls: false
        });
      });
    },

    init: function() {
      var self = this;

      // Call functions use debounce resize function
      var resizeDebounce = self.getDebounce(function() {
      }, 250);

      self.getSlick();
      self.getYoutubePlayer();
      self.getVimeoPlayer();

      window.addEventListener('resize', resizeDebounce);
    }
  };

  $(document).ready(function() {
    Hero.init();
  });

})(jQuery);
