 // Sélection du header
 const header = document.querySelector('.header');

 // Ajout d'un événement au défilement
 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) { // Vérifie si on a défilé de 100px
         header.classList.add('shrink');
     } else {
         header.classList.remove('shrink');
     }
 });
 