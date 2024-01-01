console.log("hello world")

const container=document.querySelector('.container'),
mainVideo=container.querySelector('video'),
progressBar=container.querySelector('.progress-bar'),
timeLine=container.querySelector('.video-timeline'),
progressTime=timeLine.querySelector('span'),
currTime=container.querySelector('.current-time'),
videoDur=container.querySelector('.video-duration'),
frwd=container.querySelector('.skip-frwd i'),
bkwd=container.querySelector('.skip-bkwd i'),
vol=container.querySelector('.volume i'),
volSlider=container.querySelector('.left input'),
speedBtn=container.querySelector('.playback-speed span'),
speedOptions=container.querySelector('.speed-options'),
playPauseBtn=container.querySelector('.play-pause i'),
pip=container.querySelector('.pic-in-pic span'),
main=document.querySelector('.mainPage'),
fullScreen=container.querySelector('.fullscreen i');

let timer;
const hideControls=()=>{
    if(mainVideo.paused){
        return;
    }
    timer=setTimeout(()=>{
        container.classList.remove('show-controls');
    },3000);
}
hideControls();
container.addEventListener("mousemove",()=>{
    clearTimeout(timer);
    container.classList.add('show-controls');
    hideControls();
});

const formatTime=time=>{
    let seconds=Math.floor(time%60),
    minutes=Math.floor(time/60)%60,
    hrs =Math.floor(time/3600);

    //add zero if value is less than 10
    seconds=seconds<10? `0${seconds}`:seconds;
    minutes=minutes<10? `0${minutes}`:minutes;
    hrs=hrs<10? `0${hrs}`:hrs;

    if(hrs==0){
        return `${minutes}:${seconds}`;
    }
    return `${hrs}:${minutes}:${seconds}`;
}

// for play-pause button
playPauseBtn.addEventListener('click',()=>{
    mainVideo.paused? mainVideo.play(): mainVideo.pause();
});

mainVideo.addEventListener("play",()=>{
    playPauseBtn.classList.replace('fa-play','fa-pause');
})
mainVideo.addEventListener("pause",()=>{
    playPauseBtn.classList.replace('fa-pause','fa-play');
})

// progress bar and timeline
mainVideo.addEventListener('timeupdate',(e)=>{
    let {currentTime, duration}=e.target;
    let percent=(currentTime/duration)*100;
    progressBar.style.width=`${percent}%`;
    // timing
    currTime.innerHTML=formatTime(currentTime);
    videoDur.innerHTML=formatTime(duration);

});

timeLine.addEventListener("click",(e)=>{
    let timeLineWidth=e.target.clientWidth; //getting timeline width
    mainVideo.currentTime=(e.offsetX/timeLineWidth)*mainVideo.duration;
});


const draggableProgressBar=e=>{
    let timeLineWidth=e.target.clientWidth; //getting timeline width
    progressBar.style.width=`${e.offsetX}px`
    mainVideo.currentTime=(e.offsetX/timeLineWidth)*mainVideo.duration;
    currTime.innerHTML=formatTime(mainVideo.currentTime);
}

timeLine.addEventListener("mousedown",()=>{
    timeLine.addEventListener("mousemove",draggableProgressBar);
});

container.addEventListener("mouseup",()=>{ //removing mousemove listener
    timeLine.removeEventListener("mousemove",draggableProgressBar);
});

//progress time
timeLine.addEventListener("mousemove",(e)=>{
    progressTime.style.left=`${e.offsetX}px`;
    let timeLineWidth=e.target.clientWidth; //getting timeline width
    let percent=(e.offsetX/timeLineWidth)*mainVideo.duration;
    progressTime.innerHTML=formatTime(percent);
});

//frwd and backward
frwd.addEventListener("click",()=>{
    mainVideo.currentTime+=5;
});

bkwd.addEventListener("click", ()=>{
    mainVideo.currentTime-=5;
});

//volume slider
vol.addEventListener("click",()=>{
    if(vol.classList.contains("fa-volume-high")){
        mainVideo.volume=0.0;
        vol.classList.replace("fa-volume-high","fa-volume-xmark")
    }
    else{
        mainVideo.volume=0.8;
        vol.classList.replace("fa-volume-xmark","fa-volume-high")
    }
    volSlider.value=mainVideo.volume; //update slider also as per the vol
})

volSlider.addEventListener("input",(e)=>{
    mainVideo.volume=e.target.value;
    if(mainVideo.volume==0){
        vol.classList.replace("fa-volume-high","fa-volume-xmark")
    }
    else{
        vol.classList.replace("fa-volume-xmark","fa-volume-high")
    }
});


//video playback speed
speedBtn.addEventListener("click",()=>{
    speedOptions.classList.toggle("show");
});

document.addEventListener("click",(e)=>{
    if(e.target.tagName!='SPAN' || e.target.className!='material-symbols-outlined'){
        speedOptions.classList.remove("show");
    }
});

speedOptions.querySelectorAll("li").forEach((option)=>{
    console.log(option);
    option.addEventListener("click",()=>{ //adding click on all speed options
        mainVideo.playbackRate=option.dataset.speed; 
        speedOptions.querySelector(".active").classList.remove("active");
        option.classList.add('active');
    })
});


//picture in picture
pip.addEventListener("click",()=>{
    mainVideo.requestPictureInPicture();
});

//full screen
fullScreen.addEventListener("click",()=>{
    container.classList.toggle("fullscreen");
    main.style.display="none";
    if(document.fullscreenElement){ //if video already in full screen
        console.log("f")
        fullScreen.classList.replace("fa-compress","fa-expand");
        main.style.display='block';
        return document.exitFullscreen();
    }
    fullScreen.classList.replace("fa-expand",'fa-compress');
    container.requestFullscreen();
});

