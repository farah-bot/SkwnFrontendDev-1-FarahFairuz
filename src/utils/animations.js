import $ from 'jquery';
export const initAnimations = () => {
  initScrollAnimations();
  initHeaderScroll();
  initProductSlider();
  initCategoryTabs();
};

const initScrollAnimations = () => {
  const animateElements = [
    '.fade-in',
    '.slide-in-left',
    '.slide-in-right',
    '.slide-in-up'
    ];
    
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  const handleScroll = () => {
    animateElements.forEach(selector => {
      $(selector).each(function() {
        if (isInViewport(this)) {
          $(this).addClass('active');
        }
      });
    });
  };

  $(window).on('scroll', handleScroll);

  handleScroll();
};

const initHeaderScroll = () => {
  const $header = $('.header');
  
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });
};

const initProductSlider = () => {
  const $slider = $('.product-slider');
  const $slides = $('.product-slider-slides');
  const $nextBtn = $('.slider-next');
  const $prevBtn = $('.slider-prev');
  
  let currentSlide = 0;
  const slideWidth = 354; 
  const slideMargin = 36; 
  const totalSlides = $slides.children().length;
  
  centerActiveSlide();
  

  $nextBtn.on('click', function() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      centerActiveSlide();
    }
  });
  

  $prevBtn.on('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      centerActiveSlide();
    }
  });
  
  function centerActiveSlide() {
    const offset = -currentSlide * (slideWidth + slideMargin);
    const centerOffset = ($slider.width() - slideWidth) / 2;
    $slides.css('transform', `translateX(${offset + centerOffset}px)`);

    $slides.children().removeClass('active');
    $slides.children().eq(currentSlide).addClass('active');
  }

  $(window).on('resize', function() {
    centerActiveSlide();
  });
};


const initCategoryTabs = () => {
  const $tabs = $('.category-tab');
  const $tabContents = $('.category-content');
  
  $tabs.on('click', function() {
    const category = $(this).data('category');
    
    $tabs.removeClass('active');
    $(this).addClass('active');
    
    $tabContents.removeClass('active');
    $(`.category-content[data-category="${category}"]`).addClass('active');
  });
};