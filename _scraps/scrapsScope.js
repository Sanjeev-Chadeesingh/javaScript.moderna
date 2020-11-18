// 8-10-2020 SCOPE
    //FUNCTION SCOPE
    function helpMe() {
        let message = 'I am on fire!';
        const age = 45;
        var color = 'teal';
    }
   //console.log(message, person, color); this ain't happening

   //BLOCK SCOPE
    if(true) {
        let animal = 'eel';
        var dog = 'ellis';
        //line in here is a block, and eel is scoped TO THE BLOCK!!
        //let is scoped to block and functions
        //var is not scoped to block but is scoped to functions
    }
    console.log(dog);
    // console.log(animal);
    const exOne = [1, 2, 3];
    function doubleArr(arr) {
        let arrDub = [];
        for(let num of arr) {
            let double = num * 2;
            arrDub.push(double);
        }
        return arrDub;
    }
    console.log(doubleArr(exOne));
 
    //LEXICAL SCOPE
        //nested functions are lexically bound to the scope of their parent/outer functions
        //it's a one way relationship, variables are available outwardly, not inwardly
        //when you have a nested function you have access to the variables declared in the scope of the parent function, continuing as many levels as you need to nest
    function outer() {
        let movie = 'Amadeus';

        function inner() {
            let movie = 'The Shining';
            function extraInner() {
                console.log(movie.toUpperCase())
            }
          extraInner(); 
        }
        inner();
    };
    outer();
    //logs THE SHINING