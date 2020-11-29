//subclasses and inheritance

//PARENT CLASS
class Pet {
    constructor(name, age) {
        console.log('in pet');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`
    }
}

//CHILD CLASS
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('in cat')
        //this is a reference to the 'super class'--what we are extending from; which is Pet here
        super(name, age);
        this.livesLeft = livesLeft;
    }
    //removed basic info from here and made parent class
    meow() {
        return 'MEOW!';
    }
};

// const monty = new Cat('monty', 9);

//CHILD CLASS
class Dog extends Pet {
   //removed basic info from here and made parent class
    bark() {
        return 'WOOF!';
    }
    eat() {
        return `${this.name} scarfs his food`;
    }
};

// const wyatt = new Dog('wyatt', 7);

//these two classes share some information, you can move it out and into a new parent class, and extend said info

//you have your base class, other classes that extend from it, yet can have other data you want to add to subclasses, so you use supers for the things you want from parents, and can set individual different things