document.getElementById('partyButton').addEventListener('click', function() {
    // Esconde o botão e o emoji
    this.style.display = 'none';

    // Mostra a mensagem
    document.getElementById('message').classList.remove('hidden');

    // Adicionar confetes
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.setProperty('--x', `${(Math.random() - 0.5) * 100}vw`);
        confetti.style.setProperty('--y', `${Math.random() * 100}vh`);
        confetti.style.setProperty('--rotate', `${Math.random() * 360}deg`);
        document.body.appendChild(confetti);
    }

    // Adicionar balões
    for (let i = 0; i < 5; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = `-${Math.random() * 50}px`;
        balloon.style.setProperty('--delay', `${Math.random() * 5}s`);
        document.body.appendChild(balloon);
    }

    // Mostrar mensagem extra após a animação das palavras
    setTimeout(() => {
        const extraMessage = document.getElementById('extraMessage');
        extraMessage.classList.remove('hidden');
        extraMessage.style.opacity = 1;
    }, 3500); // Ajuste o tempo para garantir que a animação da mensagem principal esteja completa

    // Função para obter uma cor aleatória
    function getRandomColor() {
        const colors = ['#FF6347', '#FF1493', '#FFD700', '#32CD32', '#00BFFF'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});