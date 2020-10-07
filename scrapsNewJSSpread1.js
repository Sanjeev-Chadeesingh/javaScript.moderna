//8-18-2020 SPREAD FOR FUNCTION CALLS
//TAKING AN ITERABLE AND BREAKING IT INTO PIECES AND MOVING/COPYING THEM TO A DESTINATION
    
    //copying objects - ONLY ONE LEVEL DEEP, WON'T CLONE NESTED OBJECTS (same with arrays)
    //can spread objects into objects
    //can't spread objects into arrays
    //can spread arrays into objects, will make key+value pairs based on indices
    //expanding some iterable(array, string, etc.) into a list of arguments
    //always use '...'    
    //each element gets passed as a separate standalone argument
    let exOne = Math.max(3, 4, 5, 6, 7, 9);
    console.log(exOne);
    let nums = [1, 2, 3, 4, 5];
    let exTwo = Math.max(nums); 
    console.log(exTwo); //this throws a NaN
    let exThree = Math.max(...nums); 
    console.log(exThree); //this works
    function giveMeFour(a, b, c, d) {
        console.log('a', a);
        console.log('b', b);
        console.log('c', c);
        console.log('d', d);
    };
    giveMeFour(4, 5, 6, 7);
    const colors = ['red', 'orange', 'yellow', 'green'];
    giveMeFour(colors); //logs array into a, undefined into b, c and d
    giveMeFour(...colors); //this works!!
    const str = 'GOAT';
    giveMeFour(str);
    giveMeFour(...str);