// Ganti URL berikut dengan URL Web App Google Apps Script kamu untuk masing-masing folder
const endpoints = {
  x:   'https://script.google.com/macros/s/AKfycbwo23uOEGPnoQiG6XGtlqRjVCeFZiZa26-8gaf7Mls-UyNxAI2ebd4ycbRSrsh5FirJ/exec',   // contoh: 'https://script.google.com/macros/s/AKfycbx.../exec'
  xi:  'https://script.google.com/macros/s/AKfycbx-mwZAutUNWPhQccXPZ8FurRGcWkPZgoDsGRFUk42i3LjiQjoOG3hR_PpG8X6Y4pVS/exec',
  xii: 'https://script.google.com/macros/s/AKfycbwXo2wDw91-kTy8fHOpxyBZTiTyPGy8_OM15xTSqXsrWC33V6gyCDbyg0rAbIDjGISi/exec'
};

function loadImages(endpoint, containerId) {
  fetch(endpoint)
    .then(res => res.json())
    .then(images => {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      images.forEach(img => {
        const el = document.createElement('img');
        el.src = img.url;
        el.alt = img.name;
        el.style.margin = "8px";
        el.style.maxWidth = "100%";
        el.style.borderRadius = "10px";
        el.style.display = "block";
        el.style.objectFit = "cover";
        el.style.width = "100%";
        el.style.maxHeight = "300px";
        container.appendChild(el);
      });
    })
    .catch(err => {
      const container = document.getElementById(containerId);
      container.innerHTML = '<p style="color:red;">Gagal memuat gambar.</p>';
    });
}

// Panggil fungsi untuk masing-masing folder
loadImages(endpoints.x, 'img-X');
loadImages(endpoints.xi, 'img-XI');
loadImages(endpoints.xii, 'img-XII');