let countdown; // global variable that will live in the window
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = new Audio("singing-bowl.mp3");
let time = 5;

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now(); // gives current time in milliseconds
    const then = now + seconds * 1000; // multiply by ms to get set
    displayTimeLeft(seconds); // run immediately once
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // divide by ms to get sec

        // check if we should stop it
        if(secondsLeft < 0) {
            clearInterval(countdown);
            endTimer();
            return;
        }
        // display it
        displayTimeLeft(secondsLeft); // run again each second
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0': ''}${minutes}`;     
}

function startTimer() {
    const seconds = parseInt(this.dataset.time); // parseInt() to turn into a real number 
    timer(seconds);
}

function endTimer(e) {
    audio.play();    
    time = 5;
}

buttons.forEach(button => button.addEventListener('click', startTimer));
    document.customForm.addEventListener('submit', function(e) {
        // Add audio permissions
        audio.play().then(() => { // pause directly
            audio.pause();
            audio.currentTime = 0;
        });
        e.preventDefault();
        const mins = this.minutes.value;
        console.log(mins);
        timer(mins * 60);
        this.reset();
    });