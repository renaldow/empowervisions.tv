

$(document).keypress(function (e) {
    if (e.which == 49) {
    	document.getElementById("video_box").style.display = "block";
    	document.getElementById("videobox_stories").style.display = "none";
        vidplay();
        
    }
});

$(document).keypress(function (e) {
    if (e.which == 50) {
    	document.getElementById("video_box").style.display = "none";
    	document.getElementById("videobox_stories").style.display = "block";
        vidplayStories();

    }
});

function vidplay() {
    	var video = document.getElementById("Video1");
    
       if (video.paused) {
          video.play();
         
       } else {
          video.pause();
         
       }
    }

function vidplayStories() {
    	var video = document.getElementById("Video2");
    
       if (video.paused) {
          video.play();
         
       } else {
          video.pause();
         
       }
    }