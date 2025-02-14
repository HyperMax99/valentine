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
    console.log("ch3ck")
  
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    const messages = [
        "You make every day special ❤️",
        "I'm so grateful to have you ❤️",
        "You're the reason for my smile ❤️",
        "With you, life feels complete ❤️",
        "You're my greatest treasure ❤️",
        "My heart belongs to you ❤️",
        "You're my one and only ❤️",
        "Every moment with you is precious ❤️",
        "You make my world brighter ❤️",
        "Together, forever and always ❤️",
        "You're the best thing in my life ❤️",
        "I cherish every memory with you ❤️",
        "You're my source of happiness ❤️",
        "My love for you grows every day ❤️",
        "With you, I feel at home ❤️",
        "You're my forever ❤️",
        "I'm so lucky to have you ❤️",
        "You complete me ❤️",
        "You're the love of my life ❤️",
        "You're everything to me ❤️"
    ];
    
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.container').appendChild(message);

    message.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Navigate to next page
function nextPage(page) {
    window.location.href = page;
}
