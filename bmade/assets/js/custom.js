if (window.location.hash) scroll(0, 0);
// void some browsers issue
setTimeout(function() {
  scroll(0, 0);
}, 1);

jQuery(document).ready(function($) {
  // Themes Nav
  /*
  var showThemesNav = function() {
      $('.themes-nav').fadeIn('fast');
      $(".show-themes-nav-link").addClass('current');
    },

    hideThemesNav = function() {
      $('.themes-nav').fadeOut('fast');
      $(".show-themes-nav-link").removeClass('current');
    };

  $(".show-themes-nav").hover(function() {
    if (!$('#topnav').hasClass("in")) {
      //$(".show-themes-nav").toggle(showThemesNav,hideThemesNav);
      if ($('.themes-nav').is(":visible")) {
        hideThemesNav();
      } else {
        showThemesNav();
      }

    }
  });
  */

  // Search bar toggle
  $('.search-toggle').on('click', function() {
    if($('.top-search').is(':visible')){
      $( ".top-search" ).slideUp();
    } else {
      $( ".top-search" ).slideDown();
    }
  });

  $(".themes-nav").hover(function() {
    if( ! $('#topnav').hasClass('in')) {
      $(this).toggleClass('themes-nav-show');
    }
  });

  $(".themes-nav").click(function() {
    if( $('#topnav').hasClass('in')) {
      $(this).toggleClass('themes-nav-show');
    }
  });

  $(".themes-nav ul li").each(function() {
    $(this).prepend('<i class="fa fa-caret-right"></i> ');
  });



  // Scrolls
  $('.scroll').on('click', function(e) {
    e.preventDefault();
    var top_spacing_fix;
    if( window.matchMedia('(min-width: 768px)').matches) {
      top_spacing_fix = 190;
    } else {
      top_spacing_fix = 100;
    }

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - top_spacing_fix + 'px'
    }, 800, 'swing');
  });

  // *only* if we have anchor on the url
  if (window.location.hash) {
    var top_spacing_fix;
    if( window.matchMedia('(min-width: 768px)').matches) {
      top_spacing_fix = 190;
    } else {
      top_spacing_fix = 100;
    }
    // smooth scroll to the anchor id
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - top_spacing_fix + 'px'
    }, 800, 'swing');
  }

  $('.choose-license li').click(function(e) {
    e.preventDefault();
    $('.choose-license li').removeClass('chosen');

    $('.choose-license').find('.fa-dot-circle-o').removeClass('fa-dot-circle-o').addClass('fa-circle-o');

    $(this).addClass('chosen');
    $(this).find('.fa-circle-o').removeClass('fa-circle-o').addClass('fa-dot-circle-o');

    var content = $(this).data('content');

    $('.license-container').slideUp();
    $('#' + content).slideDown();
  });
});
