const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    // Alterne la classe pour afficher/cacher le menu
    nav.classList.toggle('nav-active');
    
    // Animation simple du burger (optionnel)
    burger.classList.toggle('toggle');
});

