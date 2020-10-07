//8-28-2020 - THIS!!
    //reference to current object's execution scope
        //global this is the Window object
    function sayHi() {
        console.log('Hi');
        console.log(this);
    };
    sayHi();
    console.log(`---------------------------------------`);
    console.log(this);
    //variables initiated with var are attached to the window, let and const are not, var is global scope, let and const aren't