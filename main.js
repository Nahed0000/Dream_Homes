// Scroll animation
function revealOnScroll() {
  const elements = document.querySelectorAll(
    "#about img, #about .col-md-8, #services .card, #contact .col-md-9, .carousel-caption h3, .carousel-caption p"
  );
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active-animate");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
