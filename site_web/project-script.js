document.addEventListener("DOMContentLoaded", () => {
    initProjects();
});

function loadJSON() {
    return fetch("project.json")
        .then((response) => response.json())
        .catch((error) => {
            console.error("Erreur de chargement JSON :", error);
        });
}

// petite fonction utilitaire
function isAbsoluteUrl(str) {
    return /^https?:\/\//i.test(str);
}

function initProjects() {
    const projects_container = document.querySelector(".projects-container");

    loadJSON().then((data) => {
        console.log("JSON chargé :", data);

        const projects = data.projects;
        console.log(projects);

        projects.forEach((project) => {
            let div = document.createElement("div");
            div.className = "project";
            div.setAttribute("data-date", project.date);
            div.setAttribute("data-competence", project.competence);

            // Gestion du lien
            if (project.link && project.link !== "none") {
                // Si ce n'est PAS une URL absolue → on préfixe
                if (!isAbsoluteUrl(project.link)) {
                    div.setAttribute("data-link", "./files/projets/" + project.link);
                } else {
                    // Sinon on garde tel quel
                    div.setAttribute("data-link", project.link);
                }
            }

            let h3 = document.createElement("h3");
            h3.textContent = project.title;
            div.appendChild(h3);
            
            let img = document.createElement("img");
            img.src = "./images/"+project.image;
            img.alt = `Image du projet ${project.title}`;
            div.appendChild(img);

            let p = document.createElement("p");
            p.textContent = project.description;
            div.appendChild(p);

            projects_container.appendChild(div);
        });
        initEventModal();
    });
}
