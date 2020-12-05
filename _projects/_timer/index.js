//selecting elements from markup
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

//getting radius to determine perimeter
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

//creating instance of timer with elements selected
// const timer = new Timer(durationInput, startButton, pauseButton);

//now with optional fourth argument, an object with a series of callbacks that get invoked at specific times throughout the timer's lifecycle
    //allows us to isolate code base, signaling to outside world what is going on
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        //whenever timer starts, console log that it started
        console.log('Timer started!');
    },

    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        );
    },

    onComplete() {
        console.log('Timer is completed.');
    }
})