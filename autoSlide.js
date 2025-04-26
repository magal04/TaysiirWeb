  let slideIndex = 1;
  let timer;

  const slides = document.getElementsByClassName("slides");
  const dotsContainer = document.getElementById("dots");

  // Generate dots dynamically
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => currentSlide(i + 1);
    dotsContainer.appendChild(dot);
  }

  const dots = document.getElementsByClassName("dot");

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    clearTimeout(timer);
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timer = setTimeout(() => plusSlides(1), 4000);
  }

  showSlides(slideIndex);

  // Pause on hover
  const slideshow = document.getElementById("slideshow");
  slideshow.addEventListener("mouseenter", () => clearTimeout(timer));
  slideshow.addEventListener("mouseleave", () => showSlides(slideIndex));

  // Swipe for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  slideshow.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  slideshow.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) plusSlides(1);
    if (touchEndX > touchStartX + 50) plusSlides(-1);
  }
