$(document).ready(function () {
    // Video vezérlés
    const video = document.getElementById('dartsVideo');

    video.autoplay = false;

    $('#togglePlay-btn').click(function () {
        if (video.paused) { video.play(); } else { video.pause(); }
    });

    $('#rewindPlay-btn').click(function () {
        video.currentTime -= 10;
    });

    $('#forwardPlay-btn').click(function () {
        video.currentTime += 10;
    });

    $('#mute-btn').click(function () {
        video.muted = !video.muted;
    });
});