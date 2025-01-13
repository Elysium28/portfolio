// Sélection des éléments
const modal = document.getElementById('modal');
const projects = document.querySelectorAll('.project');
const closeModalBtn = document.getElementById('closeModalBtn');

projects.forEach((project) => {
    project.addEventListener('click', () => {
        modal.style.display = 'flex';
        modal.querySelector('#modal-image').setAttribute('src', project.querySelector("img").getAttribute('src'));
        modal.querySelector('#modal-title').textContent = project.querySelector("h3").textContent;
        modal.querySelector('#modal-description').textContent = project.querySelector("p").textContent;
        modal.querySelector('#modal-date').textContent = project.getAttribute('data-date');

        let competences = project.getAttribute('data-competence').split(',');
        let competencesList = modal.querySelector('#modal-competences');
        competencesList.innerHTML = '';
        competences.forEach((competence) => {
            let competenceElement = document.createElement('li');
            competenceElement.textContent = competence;
            competencesList.appendChild(competenceElement);
        });

        let link = project.getAttribute('data-link');
        if (link && link!=='none') {
            modal.querySelector('#modal-link').style.color = "#ff4081";
            modal.querySelector('#modal-link').setAttribute('href', link);
            modal.querySelector('#modal-link').textContent = "Cliquez ici";
            modal.querySelector('#modal-link').style.cursor = "pointer";
            modal.querySelector('#modal-link').style.textDecoration = "underline";
            modal.querySelector('#modal-link').style.pointerEvents = "auto";
        } else {
            modal.querySelector('#modal-link').setAttribute('href', '#');
            modal.querySelector('#modal-link').textContent = "Projet non disponible";
            modal.querySelector('#modal-link').style.color = "#ff0000";
            modal.querySelector('#modal-link').style.cursor = "not-allowed";
            modal.querySelector('#modal-link').style.textDecoration = "none";
            modal.querySelector('#modal-link').style.pointerEvents = "none";
        }

    });
});


// Fermer la modale si on clique à l'extérieur du contenu
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
