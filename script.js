function playVideo(file) {
    let video = document.getElementById("screen");

    video.src = file;
    video.load();
    video.play();

    // Trigger fullscreen
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari/Chrome */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
}
