function playVideo(file){

let video = document.getElementById("screen")

video.src = file

video.load()
video.play()

// make video fullscreen
if (video.requestFullscreen) {
    video.requestFullscreen();
} else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
} else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
}

}