//Constructors

// The new keyword does the following things:

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) the newly created object to another object by setting the other object as its parent prototype;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return an object.

//new keyword allows you to add things, sets value of this to new empty object

function Color(r, g, b) {
    this.r = r;
    this.b = b;
    this.g = g;
    console.log(this);
};


Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new Color(255, 40, 100);
