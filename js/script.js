document.addEventListener('DOMContentLoaded', () => {
    // Função de feedback no botão de CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.05)';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Função para rolar suavemente até a seção de compras
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#comprar').scrollIntoView({ behavior: 'smooth' });
    });
});
