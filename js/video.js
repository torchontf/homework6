var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= .9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime < 5 ) {
		video.currentTime = 0;
	} else {
		video.currentTime += 5;
	}
	video.play()
	console.log("Skip Ahead");
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(event) {
	if (video.muted == false) {
		video.muted = true;
		console.log("Muted");
		event.target.innerHTML = "Unmute";

	} else {
		video.muted = false;
		console.log("Unmuted");
		event.target.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("input", function() {
	var volumeLevel = document.getElementById("volume");
	volumeLevel.innerHTML = this.value + "%";
	video.volume = this.value/100;
	console.log("Volume Changed");
	console.log(this.value);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Old School");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Original");
});
