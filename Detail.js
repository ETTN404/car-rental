// Get ID from URL query
const params = new URLSearchParams(window.location.search);
let id = params.get("id");

// Validate the ID
if (id && /^\d+$/.test(id.trim())) {
  id = parseInt(id.trim(), 10);
} else {
  window.location.href = "404.html";
}

// Log ID for debugging
console.log("id:", id);

// Loading animation while content is being prepared
const AEparent = document.querySelector('.AEparent');
AEparent.innerHTML = `
  <div class="newtons-cradle" style="margin:80px auto;">
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
  </div>
`;

// Simulate fetching data or delay
setTimeout(() => {
  // Sample images and related cars (replace with real fetch if needed)
  const AEimages = [
    'PICS/R R.png',
    'PICS/new black Rolls Royce Ghost.jpg',
    'PICS/gc.png',
    'PICS/bk.png',
    'PICS/gc.png',
    'PICS/bk.png',
    'PICS/gc.png',
    'PICS/bk.png'
  ];

  const AErelatedCars = [
    { img: 'PICS/R R.png', name: 'Rolls Royce Dawn 2017', price: 'AED3,500' },
    { img: 'PICS/new black Rolls Royce Ghost.jpg', name: 'Ferrari F8 Tributo 2022', price: 'AED4,000' },
    { img: 'PICS/gc.png', name: 'Rolls Royce Dawn 2017', price: 'AED3,500' }
  ];

  AEparent.innerHTML = document.querySelector('.AEcontainer').outerHTML;

  const AEmainImage = document.getElementById('AEmain-image');
  const AEthumbnailsDiv = document.getElementById('AEthumbnails');
  const AErrelatedDiv = document.getElementById('AErrelated');
  const AEprev = document.getElementById('AEprev');
  const AEnext = document.getElementById('AEnext');
  const AEpopupImage = document.getElementById('AEpopupImage');
  const AEimageModal = document.getElementById('AEimageModal');

  let AEindex = 0;

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

      const thumbs = document.querySelectorAll('.AEthumb');
      thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('AEselected', index === AEindex);
      });

      AEprev.style.display = AEindex === 0 ? 'none' : 'block';
      AEnext.style.display = AEindex === AEimages.length - 1 ? 'none' : 'block';
    }, 300);
  }

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

  function initEventListeners() {
    AEprev.addEventListener('click', e => {
      e.stopPropagation();
      if (AEindex > 0) AEsetImage(AEindex - 1);
    });

    AEnext.addEventListener('click', e => {
      e.stopPropagation();
      if (AEindex < AEimages.length - 1) AEsetImage(AEindex + 1);
    });

    AEmainImage.addEventListener('click', openModal);

    document.addEventListener('keydown', function (e) {
      if (AEimageModal.style.display === 'flex') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevModalImage();
        if (e.key === 'ArrowRight') nextModalImage();
      }
    });
  }

  AErenderThumbnails();
  AErenderRelatedCars();
  AEsetImage(0);
  initEventListeners();

}, 1000); // Simulate 1s loading delay
