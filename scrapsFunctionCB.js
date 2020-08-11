//8-10-2020 CALLBACK FUNCTIONS & HOISTING
    //a function passed into another function as an argument, which is then invoked inside the outer function
// let pick = document.querySelector('.test');
// pick.addEventListener('click', function() {
//     alert('Hiyah There!!');
// })

    //HOISTING
        //JS hoists up variable declaration, doesn't move or reorganize it.
        // console.log(animal);
        // var animal = 'Tapir';
        let shrimp = 'Harlequin Shrimp';
        console.log(shrimp);
        //let and const aren't hoisted like var is, cannot access it until it exists and you use it
        howl();
        function howl() {
            console.log('AWHOOOOOOOOOOO');
        }
        howl();
        //can call howl before or after with a function declaration, they are hoisted!! to the top of your file!!!
        //function expressions aren't hoisted, exactly. Could log howl, but it does not exist as a function...variable is hoisted, but the function is not.
        //with function declarations and var, hoisting occurs. will give you undefined, but it is there. use let and const please!