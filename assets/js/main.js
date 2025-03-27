(function ($) {
  "use strict";
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
  
   // Accordion Scripts
      
          $('.accordion-title').eq(0).addClass('active');
          $('.accordion-content').eq(0).slideDown();
  
          $(".accordion-title").on('click', function (){
              
              var trigger = $(this);
              var hasClass = trigger.hasClass('active');
  
              $('.accordion-title').removeClass('active');
              $('.accordion-title').next().slideUp();
              
              if(hasClass) {
                  trigger.removeClass('active');
                  trigger.next().slideUp();
              }
  
              else {
                  trigger.addClass('active');
                  trigger.next().slideToggle();          
              }
  
          });
  
  //Navber//
  (() =>{
   
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".main-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
    
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
    
    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }
    
    navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
        window.innerWidth <= mediaSize){
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        collapseSubMenu();
        }
        else{
        // collapse existing expanded menuItemHasChildren
        if(navMenu.querySelector(".menu-item-has-children.active")){
        collapseSubMenu();
        }
        // expand new menuItemHasChildren
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu(){
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
      .classList.remove("active");
    }
    function resizeFix(){
       // if navMenu is open ,close it
       if(navMenu.classList.contains("open")){
       toggleNav();
       }
       // if menuItemHasChildren is expanded , collapse it
       if(navMenu.querySelector(".menu-item-has-children.active")){
        collapseSubMenu();
       }
    }
    
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
       resizeFix();
       }
    });
  
    })();
  // Navbar End //




  
    $(document).ready(function(){
      $('.trackmaster-slides-active').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    });
      
      
  /* magnificPopup img view */
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  
  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  
  
  // WOW active
  new WOW().init();
  
  
  })(jQuery);