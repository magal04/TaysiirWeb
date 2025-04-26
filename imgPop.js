  const thumbnails = document.querySelectorAll('.thumbnail');
  const overlay = document.getElementById('overlay');
  const popupImage = document.getElementById('popupImage');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      popupImage.src = thumbnail.src; // Set clicked image
      overlay.classList.add('show');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });