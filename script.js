document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU HEADER (Changement au scroll)
    const header = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérification au chargement

    // 2. MENU MOBILE (Burger & Icône)
    const burger = document.querySelector('.burger');
    const burgerIcon = burger ? burger.querySelector('i') : null;
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Bascule de l'icône entre fa-bars et fa-xmark (croix)
            if (burgerIcon) {
                if (navLinks.classList.contains('active')) {
                    burgerIcon.classList.remove('fa-bars');
                    burgerIcon.classList.add('fa-xmark');
                } else {
                    burgerIcon.classList.remove('fa-xmark');
                    burgerIcon.classList.add('fa-bars');
                }
            }
        });

        // Fermer le menu lors d'un clic sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (burgerIcon) {
                    burgerIcon.classList.remove('fa-xmark');
                    burgerIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. ANIMATIONS AU DÉFILEMENT (Scroll Reveal)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 80;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

    // On écoute le défilement de la page
    window.addEventListener('scroll', revealOnScroll);
    // On déclenche une fois au chargement pour les éléments déjà visibles en haut
    revealOnScroll();
});
