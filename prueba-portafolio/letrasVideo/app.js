document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.masked-text');
    const canvas = document.getElementById('video-canvas');
    const context = canvas.getContext('2d');
    const video = document.getElementById('hidden-video');
    
    video.addEventListener('play', function() {
        draw();
    }, false);
    
    function draw() {
        canvas.width = text.offsetWidth;
        canvas.height = text.offsetHeight;
        context.font = getComputedStyle(text).fontSize + ' ' + getComputedStyle(text).fontFamily;
        context.fillStyle = '#000'; // Color del texto
        context.fillText(text.textContent, 0, text.offsetHeight); // Dibuja el texto
        context.globalCompositeOperation = 'source-atop'; // Establece el modo de composición para que el video se dibuje solo dentro del texto
        context.drawImage(video, 0, 0, canvas.width, canvas.height); // Dibuja el video dentro del texto
        requestAnimationFrame(draw); // Repite el proceso para animar el video
    }
});
