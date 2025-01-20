document.addEventListener('DOMContentLoaded', () => {
    // Contador regressivo
    function startCountdown() {
        const countdownElement = document.getElementById('countdown-timer');
        let hours = 23;
        let minutes = 59;
        let seconds = 59;

        function updateCounter() {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) {
                        hours = 23; // Reinicia o contador
                    }
                }
            }
            countdownElement.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        setInterval(updateCounter, 1000);
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Botão de compra
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Substitua a URL abaixo pela URL do seu checkout Yampi
        window.location.href = 'https://checkout.yampi.com.br/seu-produto';
    });

    // Inicia o contador
    startCountdown();

    // Adiciona classe 'visible' aos elementos quando eles entram na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observa elementos que devem ter animação ao aparecer
    document.querySelectorAll('.benefit-item, .testimonial-item').forEach((el) => observer.observe(el));
});