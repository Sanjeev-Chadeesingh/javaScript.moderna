//7-26-20 - THIS!!
    //think of it as a reference to the current execution scope
        //will give an object back. so depending on scope and rules on 'this,' the object will be changed
    function sayHi() {
        console.log('Hi');
        console.log(this);
    }
    //sayHi();
    //sayHi() is added as a property, method onto the window object. The window object is the global scope of the browser JS.
        //this inside of a normal function refers to the browser when frontEnd
            //doesn't happen like this everytime, can depend on other things
        //WINDOW
            //window.alert('whatEver');
            var color = 'teal';
            //puts color on the window object, but only VAR...let and const are not added to global scope/window object
            const greet = () => console.log(this);
            //greet();
    const person = {
        first: 'Cherilyn',
        last: 'Sarkisian',
        nickName: 'CHER',
        fullName() {
            // console.log(`${this.first} ${this.last}, AKA ${this.nickName}`);
                //destructuring for less typing below
            const {
                first,
                last,
                nickName
            } = this;
            return `${first} ${last} AKA ${nickName}`;
        },
        printBio() {
            const fullName = this.fullName();
            console.log(`${fullName} is a person.`);
        }
    }
    person.printBio();
    //this in person method logs the object itself. this in methods is the object it is a part of.

