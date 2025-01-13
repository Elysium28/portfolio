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






