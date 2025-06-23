document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  // Original slides count
  const originalSlidesCount = slides.length;

  // Calculate slide width based on 6 visible slides
  const slideWidth = track.parentElement.clientWidth / 6;
  let currentIndex = 0;
  let isAnimating = false;

  // Clone slides for seamless looping
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
  const allSlides = Array.from(track.children);
  track.style.width = `${slideWidth * allSlides.length}px`;

  // Set initial positions
  allSlides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  // Move to specific index
  const moveToIndex = (index) => {
    if (isAnimating) return;
    isAnimating = true;

    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;

    // Handle looping
    setTimeout(() => {
      if (currentIndex >= originalSlidesCount) {
        track.style.transition = 'none';
        currentIndex = 0;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        setTimeout(() => {
          track.style.transition = 'transform 0.8s ease';
          isAnimating = false;
        }, 50);
      } else if (currentIndex < 0) {
        track.style.transition = 'none';
        currentIndex = originalSlidesCount - 1;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        setTimeout(() => {
          track.style.transition = 'transform 0.8s ease';
          isAnimating = false;
        }, 50);
      } else {
        isAnimating = false;
      }
    }, 800);
  };

  // Next button click (move one slide at a time)
  nextButton.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
    resetAutoSlide();
  });

  // Previous button click (move one slide at a time)
  prevButton.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
    resetAutoSlide();
  });

  // Auto-slide every 4 seconds
  let autoSlide = setInterval(() => {
    nextButton.click();
  }, 4000);

  const resetAutoSlide = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      nextButton.click();
    }, 4000);
  };

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', resetAutoSlide);

  // Handle window resize
  window.addEventListener('resize', () => {
    const newSlideWidth = track.parentElement.clientWidth / 6;
    allSlides.forEach((slide, index) => {
      slide.style.left = `${newSlideWidth * index}px`;
    });
    track.style.width = `${newSlideWidth * allSlides.length}px`;
    track.style.transform = `translateX(-${newSlideWidth * currentIndex}px)`;
  });

  // Initialize
  moveToIndex(0);
});