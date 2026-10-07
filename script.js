const endingSound = document.getElementById('ending-sound');
if (endingSound) {
    endingSound.play().catch(function () {
        const playBtn = document.createElement('button');
        play.Btn.textContent = 'Play Sound';
        play.Btn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; font-size: 18px; padding: 10px 16px; cursor: pointer;';
        playBtn.addEventListener('click', function () {
            endingSound.play();
            playBtn.remove();
        });
        document.body.appendChild(playBtn);
    });
}




const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (p, index) {
    const fullText = p.textContent.trim();
    p.textContent = '';
    let charIndex = 0;
    const speed = 30;

    function type() {
        if (charIndex < fullText.length) {
            p.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);

        }
    }

    setTimeout(type, index * fullText.length * speed + index * 500);
});


