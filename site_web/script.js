const header = document.querySelector('.header');
const headerSection = document.querySelector('.header > section');

// Ajout d'un événement au défilement pour le header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Vérifie si on a défilé de 50px
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Ajout d'un événement au défilement pour appliquer l'effet de flou au header
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const blurValue = Math.min(scrollPosition / 100, 10); // Ajuste le diviseur et la valeur max si nécessaire
    header.style.setProperty('--blur-value', `${blurValue}px`);
    headerSection.style.setProperty('--blur-value', `${blurValue}px`);
});



















// Liens de la navbar
const navLinks = document.querySelectorAll(".nav_bar_container a");

// Titres + contact
const sectionsToObserve = document.querySelectorAll(".title_chapter, #contact");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    // bande de détection assez large pour que le bas de page marche aussi
    rootMargin: "-45% 0px -30% 0px",
    threshold: 0
  }
);

sectionsToObserve.forEach((section) => observer.observe(section));