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

