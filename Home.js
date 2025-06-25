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

// Create a function to generate the reviews carousel dynamically
function createReviewsCarousel() {
  const reviews = [
    {
      text: "Premium Crystal Car Rental gave me an unforgettable Dubai experience. I rented the Lamborghini Huracán for a weekend, and the car was in immaculate condition. What impressed me most was the professionalism of the staff—they handled everything with such care and courtesy. The pick-up and drop-off were smooth, and the team made sure I had all the info I needed. This is more than just a car rental company—it's a five-star experience.",
      author: "AMADUES LEVSTAY"
    },
    {
      text: "Amazing service from Premium Crystal! The Mercedes-Benz I rented was top-notch, and the entire process was seamless. The team was incredibly helpful, and the pricing was very reasonable. Highly recommend for anyone looking for a luxury car rental in Dubai!",
      author: "SARAH JOHNSON"
    },
    {
      text: "The Audi A8 rental exceeded my expectations. The car was pristine, and the staff went above and beyond to ensure a great experience. The delivery to my hotel was a nice touch. Will definitely rent again!",
      author: "MOHAMMED ALI"
    },
    {
      text: "The Audi A8 rental exceeded my expectations. The car was pristine, and the staff went above and beyond to ensure a great experience. The delivery to my hotel was a nice touch. Will definitely rent again!",
      author: "MOHAMMED ALI"
    }
  ];

  const mainContainer = document.createElement('div');
  mainContainer.className = 'RM-main-container';

  const reviewSection = document.createElement('div');
  reviewSection.className = 'RM-review-section';

  const carousel = document.createElement('div');
  carousel.className = 'RM-review-carousel';

  const title = document.createElement('h2');
  title.textContent = 'Customer Review';
  carousel.appendChild(title);

  const track = document.createElement('div');
  track.className = 'RM-carousel-track';

  reviews.forEach(review => {
    const slide = document.createElement('div');
    slide.className = 'RM-review-slide';

    const text = document.createElement('p');
    text.textContent = review.text;

    const author = document.createElement('p');
    author.className = 'RM-review-author';
    author.textContent = review.author;

    slide.appendChild(text);
    slide.appendChild(author);
    track.appendChild(slide);
  });

  carousel.appendChild(track);

  const pagination = document.createElement('div');
  pagination.className = 'RM-pagination';

  reviews.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'RM-dot';
    if (index === 0) dot.classList.add('active');
    pagination.appendChild(dot);
  });

  reviewSection.appendChild(carousel);
  reviewSection.appendChild(pagination);
  mainContainer.appendChild(reviewSection);

  return mainContainer;
}

// Function to initialize the carousel functionality
function initCarousel() {
  const track = document.querySelector('.RM-carousel-track');
  const slides = Array.from(track.children);
  const dots = document.querySelectorAll('.RM-dot');
  let currentIndex = 0;
  let isAnimating = false;

  updateSlidePosition();

  let autoSlide = setInterval(moveToNextSlide, 5000);

  function moveToNextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(moveToNextSlide, 5000);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (isAnimating || currentIndex === index) return;
      isAnimating = true;
      currentIndex = index;
      updateSlidePosition();
      setTimeout(() => {
        isAnimating = false;
      }, 500);
      resetAutoSlide();
    });
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(moveToNextSlide, 5000);
  }
}

// Image error handling
function handleImageLoading() {
  const img = document.querySelector('.RS-image-container img');
  if (img) {
    if (img.complete) {
      console.log('Image loaded successfully');
    } else {
      img.addEventListener('load', () => {
        console.log('Image loaded successfully');
      });
      img.addEventListener('error', () => {
        console.log('Failed to load image');
        img.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
      });
    }
  }
}

// Insert the carousel and initialize everything
document.addEventListener('DOMContentLoaded', function() {
  const lineContainer = document.querySelector('.MN-line-container');
  if (lineContainer) {
    const carousel = createReviewsCarousel();
    lineContainer.insertAdjacentElement('afterend', carousel);
    initCarousel();
  }

  handleImageLoading();
});
document.addEventListener('DOMContentLoaded', function() {
            // Top searches data
            const topSearches = [
                "Best Car Rental Company Dubai",
                "Best Car Rental Deals Dubai",
                "Best Sports Car Rental Dubai Without Deposit",
                "Best Car Rental Rates Dubai"
            ];
            
            // Brand picks data
            const brandPicks = [
                "Lamborghini Rental in Dubai", 
                "Rolls Royce Rental in Dubai", 
                "Ferrari Rental in Dubai", 
                "Range Rover Rental in Dubai", 
                "Porsche Rental in Dubai",
                "BMW Rental in Dubai", 
                "Mercedes Rental in Dubai", 
                "Rent Mercedes Dubai", 
                "Audi Rental in Dubai", 
                "Ford Rental in Dubai",
                "Nissan Rental in Dubai", 
                "Cadillac Rental in Dubai", 
                "Chevrolet Rental in Dubai", 
                "GMC Rental in Dubai"
            ].filter(item => item);
            
            // Location searches data
            const locationSearches = [
                "Car Rental Dubai Marina", 
                "Car Rental Sheikh Zayed Road", 
                "Car Rental JBB, Dubai", 
                "Car Rental Business Bay", 
                "Car Rental Palm Jumeirah",
                "Car Rental Festival City", 
                "Car Rental Jebel Ali, Car Hire DWC", 
                "Car Rental Silicon Oasis", 
                "Car Rental JLT, Dubai", 
                "Cheap Car Rental Al Quoz",
                "Car Rental Dubai Airport", 
                "Car Rental Agency in Dubai", 
                "Car Hire in Dubai, United Arab Emirates"
            ].filter(item => item);
            
            // Render top searches (now using same flex style as others)
            const topSearchesContainer = document.getElementById('topSearches');
            topSearches.forEach(search => {
                const searchElement = document.createElement('div');
                searchElement.className = 'VM-flex-item';
                searchElement.textContent = search;
                topSearchesContainer.appendChild(searchElement);
            });
            
            // Render brand picks
            const brandPicksContainer = document.getElementById('brandPicks');
            brandPicks.forEach(brand => {
                const brandElement = document.createElement('div');
                brandElement.className = 'VM-flex-item';
                brandElement.textContent = brand;
                brandPicksContainer.appendChild(brandElement);
            });
            
            // Render location searches
            const locationSearchesContainer = document.getElementById('locationSearches');
            locationSearches.forEach(location => {
                const locationElement = document.createElement('div');
                locationElement.className = 'VM-flex-item';
                locationElement.textContent = location;
                locationSearchesContainer.appendChild(locationElement);
            });
            
            // Add divider element creation
            const divider = document.createElement('div');
            divider.className = 'divider';
            document.querySelector('.divider').appendChild(divider);
        });