  //Old Version
  // const thumbnails = document.querySelectorAll('.thumbnail');
  // const overlay = document.getElementById('overlay');
  // const popupImage = document.getElementById('popupImage');

  // thumbnails.forEach(thumbnail => {
  //   thumbnail.addEventListener('click', () => {
  //     popupImage.src = thumbnail.src; // Set clicked image
  //     overlay.classList.add('show');
  //   });
  // });

  // overlay.addEventListener('click', () => {
  //   overlay.classList.remove('show');
  // });

  // <!-- /* Style the Next/Prev buttons for the popup?  */ -->
  const thumbnails = document.querySelectorAll('.thumbnail');
  const overlay = document.getElementById('overlay');
  const popupImage = document.getElementById('popupImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const closeBtn = document.getElementById('closeBtn');

  
  let currentIndex = 0;
  
  function showImage(index) {
    popupImage.src = thumbnails[index].src;
    overlay.classList.add('show');
    currentIndex = index;
  }
  
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      showImage(index);
    });
  });
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === popupImage) {
      overlay.classList.remove('show');
    }
  });
  
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    showImage(currentIndex);
  });
  
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
  });
  // Close x botton
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.remove('show');
});

// Keyboard 
document.addEventListener('keydown', function(e) {
  if (overlay.classList.contains('show')) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // Left or Right arrow to navigate
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % thumbnails.length;
      }
      showImage(currentIndex);
    } else if (e.key === 'Escape') {
      // Escape to close the overlay
      overlay.classList.remove('show');
    }
  }
});
