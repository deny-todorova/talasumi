jQuery(document).ready(function() {

  var navOffset = jQuery(".gallery").offset().top;



  jQuery(window).scroll(function() {
    var scrollPos = jQuery(window).scrollTop();

    if (scrollPos >= navOffset) {
      jQuery(".gallery").addClass("fixed")
      && jQuery(".gallery-item").addClass("gallery-item-fix")
      && jQuery(".gallery").wrap('<div class="nav-placeholder"></div>')
      && jQuery(".nav-placeholder").height(jQuery(".gallery").outerHeight())
      ;
    } else {
      jQuery(".gallery").removeClass("fixed")
      && jQuery(".gallery-item").removeClass("gallery-item-fix")
      && jQuery(".gallery").wrap('<div class="nav-placeholder"></div>')
      && jQuery(".nav-placeholder").height(jQuery(".gallery").outerHeight())
      ;
    }

  });
 
});