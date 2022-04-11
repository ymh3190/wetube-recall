const video = document.querySelector(".videoPlayer video");

// Play & Pause
const playIcon = document.getElementById("playIcon");

function handleClickPlay() {
  if (video.paused) {
    video.play();
    playIcon.className = "fa-solid fa-pause";
  } else {
    video.pause();
    playIcon.className = "fa-solid fa-play";
  }
}
playIcon.addEventListener("click", handleClickPlay);

// Mute & Volume
const volumeIcon = document.getElementById("volumeIcon");
const volumeInput = document.getElementById("volumeInput");

function displayVolumeIcon(input) {
  if (input >= 20) {
    volumeIcon.className = "fa-solid fa-volume-high";
  } else if (input >= 10 && input < 20) {
    volumeIcon.className = "fa-solid fa-volume-low";
  } else if (input > 0 && input < 10) {
    volumeIcon.className = "fa-solid fa-volume-off";
  } else {
    volumeIcon.className = "fa-solid fa-volume-xmark";
  }
}
function handleClickVolume() {
  if (!video.muted) {
    video.muted = true;
    volumeInput.value = 0;
  } else {
    video.muted = false;
    volumeInput.value = video.volume * 100;
  }
  displayVolumeIcon(volumeInput.value);
}
function handleInputVolume() {
  video.volume = volumeInput.value / 100;
  displayVolumeIcon(volumeInput.value);
}
volumeIcon.addEventListener("click", handleClickVolume);
volumeInput.addEventListener("input", handleInputVolume);

// Current & Total time
const currentTimeSpan = document.getElementById("currentTimeSpan");
const totalTimeSpan = document.getElementById("totalTimeSpan");

function displayTimeSpan(time) {
  if (time < 60) {
    return new Date(time * 1000).toISOString().substring(14, 19);
  } else if (time >= 3600) {
    return new Date(time * 1000).toISOString().substring(11, 19);
  }
}
function handleLoadedmetadataTotalTime() {
  totalTimeSpan.innerText = displayTimeSpan(Math.ceil(video.duration));
}
function handleTimeupdateCurrentTime() {
  currentTimeSpan.innerText = displayTimeSpan(Math.ceil(video.currentTime));
}
video.addEventListener("loadedmetadata", handleLoadedmetadataTotalTime);
video.addEventListener("timeupdate", handleTimeupdateCurrentTime);

// Expand
const expandIcon = document.getElementById("expandIcon");
const videoPlayer = document.getElementById("videoPlayer");

function handleClickExpand() {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
expandIcon.addEventListener("click", handleClickExpand);

// Timeline
const timeline = document.getElementById("timeline");
const timelineDrag = document.getElementById("timelineDrag");
const timelineProgress = document.getElementById("timelineProgress");
video.onplay = function () {
  console.log(TweenMax);
};
