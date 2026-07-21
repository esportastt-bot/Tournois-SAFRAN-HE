document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU HEADER (Changement d'aspect au scroll)
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. MENU MOBILE (Burger)
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. ANIMATIONS AU DEFILEMENT (Scroll Reveal)
    // On sélectionne tous les éléments avec la classe .reveal
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distance avant le déclenchement de l'animation

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            // Si l'élément rentre dans le champ de vision
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // On écoute le défilement de la page
    window.addEventListener('scroll', revealOnScroll);
    // On déclenche une fois au chargement pour les éléments déjà visibles en haut
    revealOnScroll();
});