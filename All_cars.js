// ==== FAQ Rendering ====
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
  }
];

function renderFAQs() {
  const faqContainer = document.querySelector('.faq-container');
  if (!faqContainer) return; // prevent null error

  faqContainer.innerHTML = '';

  faqData.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    `;
    faqContainer.appendChild(faqItem);
  });

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentNode;
      item.classList.toggle('active');
    });
  });
}

// ==== CAR CARDS ====

const features = ['NO DEPOSIT', 'INSURANCE', 'USDT OK', 'YEAR'];

  const featureIcons = {
    'NO DEPOSIT': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>`,
    'INSURANCE': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/></svg>`,
    'USDT OK': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 14.09v.58c0 .73-.59 1.33-1.33 1.33h-.01c-.74 0-1.33-.6-1.33-1.33v-.6c-2.46-.42-3.03-1.51-3.18-2.41l1.64-.01c.11.47.36 1.14 1.54 1.54v-4.61c-2.34-.7-2.57-2.12-2.69-3.17l1.64-.01c.08.71.29 1.92 1.05 2.28v-.72c0-.73.59-1.33 1.33-1.33h.01c.74 0 1.33.6 1.33 1.33v.7c1.19.39 1.45 1.1 1.49 1.56l-1.63.01c-.03-.26-.13-1.1-.86-1.5v4.65c2.4.71 2.69 1.9 2.75 3.22l-1.64.01c-.04-.89-.31-1.82-1.5-2.25z"/></svg>`,
    'YEAR': `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"/></svg>`
  };

function renderCards() {
  const cardContainer = document.getElementById('cardContainer');
  if (!cardContainer) return;

    cardContainer.innerHTML = `
    <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
    </div>
  `;

  fetch('https://car-rental-pi48.onrender.com/api/cars')
    .then(res => res.json())
    .then(data => {
      cardContainer.innerHTML = ``;
      if (!data.results || !Array.isArray(data.results)) {
        console.warn("No car results found");
        return;
      }

      data.results.forEach(car => {
        const title = car.slug
                .split("-")                     // Split by "-"
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each
                .join(" ");
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${car.image_url || 'https://via.placeholder.com/300'}" alt="${car.slug}">
          <div class="price">${car.daily_rate}</div>
          <div class="whats">🔥Deals on WhatsApp🔥</div>
          <div class="card-content">
             <a href="/detail/${car.slug}" class="atag">${title}</a>
            <div class="card-icons">
              ${features.map(f => `
                <div class="feature-item">
                  <div class="feature-icon">${featureIcons[f] || ''}</div>
                  <div class="feature-text">${f}</div>
                </div>
              `).join('<div class="feature-separator">|</div>')}
            </div>
          </div>
          <div class="card-buttons">
            <button class="whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
            <button class="call"><i class="fas fa-phone"></i> Call Us</button>
          </div>
        `;
        cardContainer.appendChild(card);
      });
    })
    .catch(err => console.error("Error fetching car data:", err));
}

// ==== Navbar Marker ====

function moveMarker(element) {
  const marker = document.getElementById('marker');
  const navbar = document.querySelector('.navbar-lower');
  if (!marker || !element || !navbar) return;

  const rect = element.getBoundingClientRect();
  const navbarRect = navbar.getBoundingClientRect();
  const left = rect.left - navbarRect.left;
  marker.style.width = rect.width + 'px';
  marker.style.left = left + 'px';
}

function initializeMarker() {
  const homeLink = document.querySelector('.nav-link');
  if (homeLink) moveMarker(homeLink);
}

// ==== Language Dropdown ====

function toggleLanguageDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.toggle('active');
}

document.addEventListener('click', function(e) {
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown && !langDropdown.contains(e.target)) {
    langDropdown.classList.remove('active');
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (!this.closest('.lang-dropdown')) {
      moveMarker(this);
    }
  });
});

// ==== Scroll Effects ====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-container');
  const upper = document.querySelector('.navbar-upper');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!navbar || !upper) return;

  if (scrollTop > 0) {
    navbar.style.background = 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(51, 51, 51, 0))';
    upper.style.opacity = '0';
    upper.style.height = '0';
  } else {
    navbar.style.background = 'transparent';
    upper.style.opacity = '1';
    upper.style.height = 'auto';
  }
});

// ==== Back to Top Button ====
const backToTop = document.querySelector('.back-to-top-2');
if (backToTop) {
  backToTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==== Initialization ====
document.addEventListener('DOMContentLoaded', function () {
  renderCards();
  renderFAQs();
  initializeMarker();
});
