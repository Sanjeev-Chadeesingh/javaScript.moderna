class Timer {
    //this constructor will be called automatically each time we create a new instance of Timer
    constructor(durationInput, startButton, pauseButton, callbacks) {
        
        //assigning three arguments to instance variables, so we can refer back to them
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        //this is how you make it unneccessary to add callbacks to run app
        if(callbacks) {
            //saves reference to callback passed in IF USED
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        //add some event handlers to these DOM elements
        this.startButton.addEventListener('click', this.start);
        //older way to fix this to Class with bind, sans arrow function (can make start a regular function w/keyword)
        // this.startButton.addEventListener('click', this.start.bind(this));
        
        //event listener added to pause after setting up its method below
        this.pauseButton.addEventListener('click', this.pause);
    };

    //this is set to the Timer instance via arrow function linking this to closest valid line above it
    start = () => {
        //calling the onStart callback, signaling to the outside world that the timer is starting now
            //first check to see if the onStart callback is defined
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }


        //making sure we run this.tick (the console.log) every second
        //first manual call makes sure user isn't waiting a full second before clicking, now, whenever they click start, they get their first tick, and THEN the interval comes
        this.tick();
        
        //saving the setInterval to this.interval allows us to access it inside other methods (like pause!)
        this.interval = setInterval(this.tick, 10);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        //we want to reach into the DOM and decrement whatever number is set
        
        //reaches into text input, gets value, minuses one, then throws value back inside text input
        // const timeRemaining  = parseFloat(this.durationInput.value);
        // this.durationInput.value = timeRemaining - 1;

        //refactor with getters and setters
            //getter                //setter
        // this.timeRemaining = this.timeRemaining - 1;

        //handles way to stop timer from displaying negatives
        if(this.timeRemaining <= 0) {
            this.pause();
            //this is called here, because timer is at 0
            if(this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .01;
            //added the callback here, 'if given, call it here'
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }

        //refactor of conditional to remove negative seconds into single line
        // this.timeRemaining <= 0 ? this.pause() : this.timeRemaining = this.timeRemaining - 1;
    };

    //use getters and setters to refactor the tick method
    
    //putting get here allows us to call a function without parens, treating it like an instance variable
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    //putting set here allows us to change the value inside the input
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
};