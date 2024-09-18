$(document).ready(function() {
    developmentIsVisible = false;

    
    $(window).scroll(function() {
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      $('.experience .content .hidden').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({
            'opacity': '1',
            'transform': 'translateX(0)'
          }, 600);
        }
      });
  
      /* Skills Section */
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight() / 2;
  
      if ((bottom_of_window > middle_of_developmentWrapper) && !developmentIsVisible) {
        $('.skills-bar-container li').each(function() {
          var $barContainer = $(this).find('.bar-container');
          var dataPercent = parseInt($barContainer.data('percent'));
          var elem = $(this).find('.progressbar');
          var percent = $(this).find('.percent');
          var width = 0;
  
          var id = setInterval(frame, 15);
  
          function frame() {
            if (width >= dataPercent) {
              clearInterval(id);
            } else {
              width++;
              elem.css('width', width + '%');
              percent.text(width + '%');
            }
          }
        });
        developmentIsVisible = true;
      }
    });
  });
  