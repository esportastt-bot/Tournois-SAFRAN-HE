// Animation d'apparition au défilement (Scroll Reveal)
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Déclenchement initial et lors du défilement
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
