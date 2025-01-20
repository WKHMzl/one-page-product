document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    // Função de hover no botão CTA
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.05)';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Função para rolar suavemente até a seção de compra
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#comprar').scrollIntoView({ behavior: 'smooth' });
    });
});
