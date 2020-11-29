//check mdn for references regarding prototypes and OOP
// __proto__  property that references the prototype
    //reference to the blueprint for the object, when you make objects, they INHERIT the methods from one template, OG prototype through referencing

String.prototype.grumpus = () => console.log(`GO AWAY`);
const cat = 'Blue';
cat.grumpus();

String.prototype.yell = function() {
    //this refers to the string 'blue'
    console.log(this);
    return `OMG!!! ${this.toUpperCase()}!!!!!!`;
};
console.log(cat.yell());

Array.prototype.pop = () => 'Sorry, I want it, wont pop it off.';
arr = [3, 4, 5];
console.log(arr.pop(1));

//single object that contains common props and methods that other copied objects look up to to find their common methods and props

const nums = [7, 8, 9];
console.log(nums);
//difference between __proto__ and Object.prototype
    //dunder is a reference to the template object
    //.prototype is the actual template


/////////////////////////////////////////////////////////////////////////////


function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
};

//factory function =>this factory makes us an object we can use afterwards
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`; 
    };
    color.hex = function() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb);