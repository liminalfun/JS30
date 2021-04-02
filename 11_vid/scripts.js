/* Get Out Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen__button');

/* Build out functions */
function togglePlay() {
    // Short form
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
};

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    video[this.name] = this.value;  
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`; 
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime; 
};

function openFullScreen() {
    console.log('Full Screen time');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE11
        video.msRequestFullscreen();
    };
};

// Keyboard controls, not from tutorial!
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 32:
            e.preventDefault();
            togglePlay();
            break;

        case 37:
            e.preventDefault();
            keyTime = video.currentTime;
            video.currentTime = keyTime - 5;
        break;

        case 39:
            e.preventDefault();
            keyTime = video.currentTime;
            video.currentTime = keyTime + 5;
        break;
    }
};


/* Hook up to the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip)); 

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); 

video.addEventListener('timeupdate', handleProgress);

let mousedown = false; // flag event
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // passed event to first check variable. if it's true, it moves on to the next one
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', openFullScreen);