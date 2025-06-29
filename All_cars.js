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
  'NO DEPOSIT': '✅',
  'INSURANCE': '🛡️',
  'USDT OK': '💰',
  'YEAR': '📅'
};

function renderCards() {
  const cardContainer = document.getElementById('cardContainer');
  if (!cardContainer) return;

  cardContainer.innerHTML = '';

  fetch('https://car-rental-pi48.onrender.com/api/cars')
    .then(res => res.json())
    .then(data => {
      if (!data.results || !Array.isArray(data.results)) {
        console.warn("No car results found");
        return;
      }

      data.results.forEach(car => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${car.image_url || 'https://via.placeholder.com/300'}" alt="${car.slug}">
          <div class="price">${car.daily_rate}</div>
          <div class="whats">🔥Deals on WhatsApp🔥</div>
          <div class="card-content">
            <a href="Detail.html?id=${car.id}">${car.slug}</a>
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
