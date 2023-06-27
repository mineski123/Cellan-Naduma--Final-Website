const menuBtn = document.querySelector(".menu-btn");
		const navigation = document.querySelector(".navigation");
		const log = document.getElementById(".logout");
		log.addEventListener("click", function(e){
		e.preventDefault();
			window.location.replace("homepage.html");
			});
		menuBtn.addEventListener("click", () => {
			menuBtn.classList.toggle("active");
			navigation.classList.toggle("active");
		});

		const btns = document.querySelectorAll(".nav-button");

		var sliderNav = function(manual){
			btns[manual].classList.add("active");
		}

		btns.forEach((btns, i) => {
			btn.addEventListener("click", () => {
				sliderNav(i);
			});
		});
		function playVideo(index) {
  // Define the video URLs and sources
		const videos = [
			"Media/video1.mp4",
			"Media/video2.mp4",
			"Media/video3.mp4",
			"Media/video4.mp4",
			"Media/video5.mp4"
		];

  // Get the video player element
  		const videoPlayer = document.getElementById("video-player");

  // Update the video source based on the selected index
  		videoPlayer.src = videos[index];

  // Play the video
 		videoPlayer.play();
		}

