console.log('More This!');
//7-27-2020 MORE THIS!
    //the value of this depends on the invocation context of the funtion it is used in
        //value will change depending on how function will be executed, not just where you write it.
        //just because of method, does not men guaranteed to reference object. person.printBio() is executed in such a way it makes this reference the object
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'CHER',
    fullName() {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person.`);
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickname} says HAHAHAHAHAHAHAHA`);
    }
}
const printBio = person.printBio;
//pointing the newly made variable to the method
//if using this in a method, this is TYpically set to its object
//if there's something to the left of the method call, this is set to the thing to the left, the object, otherwise is set to window, TYpically.
// printBio();
//arrow functions and this
    //they do not get their own version of this!
    person.laugh();
    //the laugh method logs the window as this, and makes nickname undefined. this is why we don't write methods as arrow functions, need that THIS
    //not set in stone based on where it is, set to how it is executed