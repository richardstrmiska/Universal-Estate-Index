const toneSelector = document.getElementById('toneSelector');
const audioPlayer = document.getElementById('audioPlayer');

toneSelector.addEventListener('change', function() {
    audioPlayer.src = toneSelector.value;
    audioPlayer.play();
});

// Initialize
audioPlayer.src = toneSelector.value;