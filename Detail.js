const params = new URLSearchParams(window.location.search);

    const pathParts = window.location.pathname.split('/');
    let id = pathParts[pathParts.length - 1];


// let id = params.get("id");

if (id !== null && id !== undefined && id !== "") {
  id = id.trim();

  // Allow only numeric IDs
  if (!/^\d+$/.test(id)) {
    console.error("Invalid ID format detected.");
    id = null;
  } else {
    id = parseInt(id, 10); // convert to number if valid
  }
} else {
  console.warn("No ID parameter found in URL.");
}
if (id === null) {
  window.location.href = "404.html";
}


  console.log("id:", id);
    const AEimages = ['PICS/R R.png','PICS/new black Rolls Royce Ghost.jpg','PICS/gc.png','PICS/bk.png','PICS/gc.png','PICS/bk.png','PICS/gc.png','PICS/bk.png'];
    const AErelatedCars = [
      {img: 'PICS/R R.png', name: 'Rolls Royce Dawn 2017', price: 'AED3,500'},
      {img: 'PICS/new black Rolls Royce Ghost.jpg', name: 'Ferrari F8 Tributo 2022', price: 'AED4,000'},
      {img: 'PICS/gc.png', name: 'Rolls Royce Dawn 2017', price: 'AED3,500'}
    ];

    // DOM Elements
    const AEmainImage = document.getElementById('AEmain-image');
    const AEthumbnailsDiv = document.getElementById('AEthumbnails');
    const AErrelatedDiv = document.getElementById('AErrelated');
    const AEprev = document.getElementById('AEprev');
    const AEnext = document.getElementById('AEnext');
    const AEpopupImage = document.getElementById('AEpopupImage');
    const AEimageModal = document.getElementById('AEimageModal');
    
    let AEindex = 0;

    // Initialize the gallery
    function initGallery() {
      AErenderThumbnails();
      AErenderRelatedCars();
      AEsetImage(0);
      initEventListeners();
    }

    // Render thumbnails
    function AErenderThumbnails() {
      AEthumbnailsDiv.innerHTML = '';
      AEimages.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'AEthumb' + (i === AEindex ? ' AEselected' : '');
        img.addEventListener('click', () => AEsetImage(i));
        AEthumbnailsDiv.appendChild(img);
      });
    }

    // Render related cars
    function AErenderRelatedCars() {
      AErrelatedDiv.innerHTML = '';
      AErelatedCars.forEach(car => {
        const item = document.createElement('div');
        item.className = 'AErrelated-item';
        item.innerHTML = `
          <img src="${car.img}" alt="${car.name}">
          <div>
            <p class="AEP">${car.name}</p>
            <span class="AESpan">${car.price}</span>
          </div>
        `;
        AErrelatedDiv.appendChild(item);
      });
    }

    // Set current image
    function AEsetImage(i) {
      AEindex = i;
      AEmainImage.classList.add('loading');
      AEmainImage.style.opacity = 0;
      
      setTimeout(() => {
        AEmainImage.src = AEimages[AEindex];
        AEmainImage.onload = () => {
          AEmainImage.style.opacity = 1;
          AEmainImage.classList.remove('loading');
        };
        
        // Update thumbnail selection without full re-render
        const thumbs = document.querySelectorAll('.AEthumb');
        thumbs.forEach((thumb, index) => {
          thumb.classList.toggle('AEselected', index === AEindex);
        });
        
        // Update button visibility
        AEprev.style.display = AEindex === 0 ? 'none' : 'block';
        AEnext.style.display = AEindex === AEimages.length - 1 ? 'none' : 'block';
      }, 300);
    }

    // Modal functions
    function openModal() {
      AEpopupImage.src = AEimages[AEindex];
      AEimageModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      AEimageModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function prevModalImage() {
      if (AEindex > 0) {
        AEsetImage(AEindex - 1);
        AEpopupImage.src = AEimages[AEindex];
      }
    }

    function nextModalImage() {
      if (AEindex < AEimages.length - 1) {
        AEsetImage(AEindex + 1);
        AEpopupImage.src = AEimages[AEindex];
      }
    }

    // Initialize event listeners
    function initEventListeners() {
      // Main navigation
      AEprev.addEventListener('click', (e) => {
        e.stopPropagation();
        if(AEindex > 0) AEsetImage(AEindex - 1);
      });

      AEnext.addEventListener('click', (e) => {
        e.stopPropagation();
        if(AEindex < AEimages.length - 1) AEsetImage(AEindex + 1);
      });

      // Modal interactions
      AEmainImage.addEventListener('click', openModal);
      
      // Keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (AEimageModal.style.display === 'flex') {
          if (e.key === 'Escape') closeModal();
          if (e.key === 'ArrowLeft') prevModalImage();
          if (e.key === 'ArrowRight') nextModalImage();
        }
      });
    }

    // Initialize the gallery when DOM is loaded
    document.addEventListener('DOMContentLoaded', initGallery);
