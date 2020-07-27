//7-27-2020 Annoyomatic! Still more THIS!!
const annoyer = {
    phrases: ['literally', 'cray cray', 'I can\'t even', 'Totes!', 'YOLO', 'Can\'t Stop, Won\'t Stop'],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        console.log(this.pickPhrase())
        this.timerID = setInterval(() => {
            // console.log(this)
            //above log is set to the window object, throws error @ runtime
            //changed function to arrow function, and given the lack of a this context, it grabs the this from the object or next closest this reference!!
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerID);
        console.log('Thank heavens that\'s over!');
    }
}
// setInterval(funcYouWantCalled, interval){doSomethingOfTheFunction}
// clearInterval(ID);
//arrow functions let you keep using the this from the parent function / object, regular functions will create a new context for this!