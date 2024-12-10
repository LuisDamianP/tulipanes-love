const field = document.getElementById('tulipField');

function createTulip(x, y) {
    const tulip = document.createElement('div');
    tulip.classList.add('tulip');
    tulip.style.left = `${x}px`;
    tulip.style.bottom = `${y}px`;
    return tulip;
}

function generateTulips() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);
        const tulip = createTulip(x, y);
        field.appendChild(tulip);
    }
}

generateTulips();

window.addEventListener('resize', () => {
    field.innerHTML = '';
    generateTulips();
});

window.addEventListener('load', () => {
    const audio = document.getElementById('miCancion');
    audio.play().catch((error) => {
        console.log('La reproducción automática fue bloqueada.');
    });
});