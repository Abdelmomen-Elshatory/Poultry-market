(function($) {
  'use strict';
  $(function() {
  
    // Enable feather-icons with SVG markup
    feather.replace();

    // Sidebar toggle to sidebar-folded
    $('.sidebar-toggler').on('click', function(e) {
      $(this).toggleClass('active');
      $(this).toggleClass('not-active');
      if (window.matchMedia('(min-width: 270px)').matches) {
        e.preventDefault();
        $(".our-sidebar").toggleClass('sidebar-folded');
      } else if (window.matchMedia('(max-width: 270px)').matches) {
        e.preventDefault();
        body.toggleClass('sidebar-open');
      }
    });

  });
})(jQuery);