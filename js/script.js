$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready

  // breakpoint and up  
  $(window).resize(function() {
      if ($(window).width() >= 980) {

          // when you hover a toggle show its dropdown menu
          $(".navbar.mega-menu .dropdown-toggle").hover(function() {
              $(this).parent().toggleClass("show");
              $(this).parent().find(".dropdown-menu").toggleClass("show");
          });

          // hide the menu when the mouse leaves the dropdown
          $(".navbar.mega-menu .dropdown-menu").mouseleave(function() {
              $(this).removeClass("show");
          });
      }
  });

  $(".menu-action").click(function(){
    var menuStatus = $(this).hasClass('collapsed');
 
    if (menuStatus) {
       $('.menu-action i').removeClass('fa-bars').addClass('fa-times');  
    } else {
     $('.menu-action i').removeClass('fa-times').addClass('fa-bars');  
    }
  });

  // document ready  
});