   const faqData = [
  {
    question: "WHAT ARE THE REQUIRED DOCUMENTS FOR UAE RESIDENTS?",
    answer: "UAE residents wanting to book a vehicle from our VIP and Luxury car rental in Dubai need to share copies of their valid UAE driving license and Emirates ID."
  },
  {
    question: "WHAT ARE THE REQUIRED DOCUMENTS FOR TOURISTS VISITING UAE?",
    answer: "Tourists visiting UAE need to provide their passport copy, visa copy, and valid international driving license or driving license from their home country."
  },
  {
    question: "CAN AN INTERNATIONAL DRIVER'S LICENSE WORK IN DUBAI?",
    answer: "Yes, an international driver's license is valid in Dubai along with your original driving license from your home country. The license must be valid for the duration of your stay."
  },
  {
    question: "WHAT IS THE MINIMUM AGE TO RENT A CAR IN DUBAI?",
    answer: "The minimum age to rent a car in Dubai is 21 years for most vehicles, but some luxury or high-performance cars may require the driver to be at least 25 years old."
  },
  {
    question: "DO YOU OFFER INSURANCE WITH YOUR RENTALS?",
    answer: "Yes, all our rentals include comprehensive insurance as per UAE regulations. Additional coverage options are also available for extra protection."
  },
  {
    question: "WHAT IS YOUR CANCELLATION POLICY?",
    answer: "You can cancel your reservation free of charge up to 24 hours before your scheduled pickup time. Late cancellations may incur a fee."
  },
  {
    question: "WHAT ARE THE REQUIRED DOCUMENTS FOR UAE RESIDENTS?",
    answer: "UAE residents wanting to book a vehicle from our VIP and Luxury car rental in Dubai need to share copies of their valid UAE driving license and Emirates ID."
  },
  {
    question: "WHAT ARE THE REQUIRED DOCUMENTS FOR TOURISTS VISITING UAE?",
    answer: "Tourists visiting UAE need to provide their passport copy, visa copy, and valid international driving license or driving license from their home country."
  },
  {
    question: "CAN AN INTERNATIONAL DRIVER'S LICENSE WORK IN DUBAI?",
    answer: "Yes, an international driver's license is valid in Dubai along with your original driving license from your home country. The license must be valid for the duration of your stay."
  },
  {
    question: "WHAT IS THE MINIMUM AGE TO RENT A CAR IN DUBAI?",
    answer: "The minimum age to rent a car in Dubai is 21 years for most vehicles, but some luxury or high-performance cars may require the driver to be at least 25 years old."
  },
  {
    question: "DO YOU OFFER INSURANCE WITH YOUR RENTALS?",
    answer: "Yes, all our rentals include comprehensive insurance as per UAE regulations. Additional coverage options are also available for extra protection."
  },
  {
    question: "WHAT IS YOUR CANCELLATION POLICY?",
    answer: "You can cancel your reservation free of charge up to 24 hours before your scheduled pickup time. Late cancellations may incur a fee."
  }
];


function renderFAQs() {
  const faqContainer = document.querySelector('.faq-container');
  
  // Clear existing content (if any)
  faqContainer.innerHTML = '';
  
  // Create and append FAQ items
  faqData.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    
    faqItem.innerHTML = `
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    `;
    
    faqContainer.appendChild(faqItem);
  });
  
  // Add click event listeners to all questions
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentNode;
      item.classList.toggle('active');
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
  renderFAQs();
  // Your other initialization code...
});








// Make cards clickable on mobile
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function() {
        const buttons = this.querySelector('.card-buttons');
        buttons.style.display = buttons.style.display === 'flex' ? 'none' : 'flex';
      });
    });
  }
});



  // Car data array
  // const cars = [
  //   {
  //     image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 1700',
  //     title: 'Chevrolet Corvette C8 Stingray 2025',
  //     year: '2024',
  //     features: ['NO DEPOSIT', '2024', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 600',
  //     title: 'BMW 325i M Sport 2025',
  //     year: '2025',
  //     features: ['NO DEPOSIT', '2025', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 25555666500',
  //     title: 'Mercedes Benz AMG G63 2024',
  //     year: '2024',
  //     features: ['NO DEPOSIT', '2024', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 1700',
  //     title: 'Chevrolet Corvette C8 Stingray 2025',
  //     year: '2024',
  //     features: ['NO DEPOSIT', '2024', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 600',
  //     title: 'BMW 325i M Sport 2025',
  //     year: '2025',
  //     features: ['NO DEPOSIT', '2025', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 2500',
  //     title: 'Mercedes Benz AMG G63 2024',
  //     year: '2024',
  //     features: ['NO DEPOSIT', '2024', 'INSURANCE', 'USDT OK']
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //     price: 'AED 2500',
  //     title: 'Mercedes Benz AMG G63 2024',
  //     year: '2024',
  //     features: ['NO DEPOSIT', '2024', 'INSURANCE', 'USDT OK']
  //   }
  // ];

  // Function to render cards
  function renderCards() {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';
  
  // SVG icons for special features
  const featureIcons = {
    'NO DEPOSIT': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>`,
    'INSURANCE': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/></svg>`,
    'USDT OK': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 14.09v.58c0 .73-.59 1.33-1.33 1.33h-.01c-.74 0-1.33-.6-1.33-1.33v-.6c-2.46-.42-3.03-1.51-3.18-2.41l1.64-.01c.11.47.36 1.14 1.54 1.54v-4.61c-2.34-.7-2.57-2.12-2.69-3.17l1.64-.01c.08.71.29 1.92 1.05 2.28v-.72c0-.73.59-1.33 1.33-1.33h.01c.74 0 1.33.6 1.33 1.33v.7c1.19.39 1.45 1.1 1.49 1.56l-1.63.01c-.03-.26-.13-1.1-.86-1.5v4.65c2.4.71 2.69 1.9 2.75 3.22l-1.64.01c-.04-.89-.31-1.82-1.5-2.25z"/></svg>`,
    // Default calendar icon for any year
    'YEAR': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"/></svg>`
  };




// Select the container where cards will be added

fetch('https://car-rental-pi48.onrender.com/api/cars')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(car => {
      const card = document.createElement('div');
      card.className = 'card';
      
      // Get primary image (first image in array or fallback to image_url)
      const primaryImage = car.images.length > 0 ? 
        car.images.find(img => img.is_primary)?.image_url || car.images[0].image_url : 
        car.image_url;
      
      // Prepare features to display
      const features = [
        car.year,
        `${car.seats} Seats`,
        `${car.luggage_capacity} Luggage`,
        `${car.doors} Doors`,
        `${car.mileage_limit} km limit`
      ];
      
      card.innerHTML = `
        <img src="${primaryImage}" alt="${car.make} ${car.model}">
        <div class="price">AED ${car.daily_rate}/day</div>
        ${car.whatsapp_deal ? '<div class="whats">🔥Deals on WhatsApp🔥</div>' : ''}
        <div class="card-content">
          <h3>${car.make} ${car.model}</h3>
          <div class="card-icons">
            ${features.map(feature => {
              // Extract feature key for icon lookup
              const featureKey = feature.toString().split(' ')[1]?.toLowerCase() || 
                               feature.toString().split(' ')[0]?.toLowerCase();
              const icon = featureIcons[featureKey] || '';
              
              return `
                <div class="feature-item">
                  <div class="feature-icon">${icon}</div>
                  <div class="feature-text">${feature}</div>
                </div>
              `;
            }).join('<div class="feature-separator">|</div>')}
          </div>
          ${car.description ? `<p class="description">${car.description}</p>` : ''}
        </div>
        <div class="card-buttons">
          <button class="whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
          <button class="call"><i class="fas fa-phone"></i> Call Us</button>
        </div>
      `;
      
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
    cardContainer.innerHTML = `<p class="error">Error loading cars. Please try again later.</p>`;
  });

//   cars.forEach(car => {
//     const card = document.createElement('div');
//     card.className = 'card';
    
//     card.innerHTML = `
//       <img src="${car.image}">
//       <div class="price">${car.price}</div>
//       <div class="whats">🔥Deals on WhatsApp🔥</div>
//       <div class="card-content">
//         <h3>${car.title}</h3>
//         <div class="card-icons">
//           ${car.features.map(feature => {
//             // Check if feature is a year (4-digit number)
//             const isYear = /^\d{4}$/.test(feature);
//             const icon = isYear ? featureIcons['YEAR'] : (featureIcons[feature] || '');
            
//             return `
//               <div class="feature-item">
//                 <div class="feature-icon">${icon}</div>
//                 <div class="feature-text">${feature}</div>
//               </div>
//             `;
//           }).join('<div class="feature-separator">|</div>')}
//         </div>
//       </div>
//       <div class="card-buttons">
//         <button class="whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
// <button class="call"><i class="fas fa-phone"></i> Call Us</button>
//       </div>
//     `;
    
//     cardContainer.appendChild(card);
//   });
// }

  }

  // Initialize marker position on home link
  function initializeMarker() {
    const homeLink = document.querySelector('.nav-link');
    if (homeLink) {
      moveMarker(homeLink);
    }
  }

  function moveMarker(element) {
    const marker = document.getElementById('marker');
    const rect = element.getBoundingClientRect();
    const navbar = document.querySelector('.navbar-lower');
    const navbarRect = navbar.getBoundingClientRect();
    
    const left = rect.left - navbarRect.left;
    marker.style.width = rect.width + 'px';
    marker.style.left = left + 'px';
  }

  // Toggle language dropdown
  function toggleLanguageDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('active');
    
    // Don't move marker for language dropdown
    return false;
  }

  // Close language dropdown when clicking elsewhere
  document.addEventListener('click', function(e) {
    const langDropdown = document.getElementById('langDropdown');
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove('active');
    }
  });

  // Reset marker when clicking another link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // Skip if it's the language dropdown link
      if (!this.closest('.lang-dropdown')) {
        moveMarker(this);
      }
    });
  });

  // Handle navbar background and upper navbar visibility on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-container');
    const navbarUpper = document.querySelector('.navbar-upper');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
      navbar.style.background = 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(51, 51, 51, 0))';
      navbarUpper.style.opacity = '0';
      navbarUpper.style.height = '0';
    } else {
      navbar.style.background = 'transparent';
      navbarUpper.style.opacity = '1';
      navbarUpper.style.height = 'auto';
    }
  });

  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    renderCards();
    initializeMarker();
  });

      // FAQ functionality - modified to allow multiple open items
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentNode;
      item.classList.toggle('active');
    });
  });
// Smooth scroll to top functionality
  document.querySelector('.back-to-top-2').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });