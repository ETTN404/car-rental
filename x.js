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