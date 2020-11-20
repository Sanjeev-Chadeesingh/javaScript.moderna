//Prototypes

//_proto_
    //template object
    //contain methods

//this here refers to whatever is on the left side of the dot
String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!!!`
};

//single object that contains properties and methods that can be inherited by other objects 

//Basic OOP

const navColor = new Color('carrot', [230, 126, 34]);
const logColor = new Color('emerald', [42, 204, 113]);