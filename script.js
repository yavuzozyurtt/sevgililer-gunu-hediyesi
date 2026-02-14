function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Rastgele kalp emojileri veya ikonları
    const hearts = ['❤️', '💖', '💝', '💕', '💗'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Rastgele konum ve hız
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(heart);
    
    // Ekran dışına çıkan kalbi temizle (Bellek dostu!)
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Her 400 milisaniyede bir yeni kalp oluştur
setInterval(createHeart, 400);
