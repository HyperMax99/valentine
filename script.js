// Create falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animation = `fall ${Math.random() * 5 + 3}s linear`;
    heart.style.opacity = Math.random();
    document.querySelector('.falling-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 300);

// Show confetti and new message on button click
function showLove() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    const messages = [
        "You're my sunshine! ☀️",
        "I love you more every day! 💞",
        "You're my dream come true! 🌟",
        "My heart belongs to you forever! 💖",
    ];
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.container').appendChild(message);
}

// Navigate to next page
function nextPage(page) {
    window.location.href = page;
}
