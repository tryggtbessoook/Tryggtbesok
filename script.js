function playVideo(n) {
  const player = document.getElementById('videoPlayer');
  player.src = `video${n}.mp4`;
  player.load();
  player.play();
}
