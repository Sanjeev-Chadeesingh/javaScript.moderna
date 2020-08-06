//8-5-2020 for...of
    /*
    for(variable of iterable) {
        statement
    }
    each character in a string
    each number in an array
    each property in an object
    not good for indexing and positioning 
    */
//    let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
//    for(let sub of subreddits) {
//        console.log(sub);
//    };
//    for(let char of 'cockadoodledoo') {
//        console.log(char.toUpperCase());
//    };
//    const magicSquare = [
//        [2, 7, 6],
//        [9, 5, 1],
//        [4, 3, 8]
//    ];
//    for(let row of magicSquare) {
//        let sum = 0;
//        for(let num of row) {
//            sum += num;
//        }
//        console.log(sum);
//    }
//    const words1 = ['mail', 'milk', 'bath', 'black'];
//    const words2 = ['box', 'shake', 'tub', 'berry'];
//    for(let i = 0; i < words1.length; i++) {
//        console.log(`${words1[i] + words2[i]}`);
//    }
   const movieReviews = {
       Arrival: 9.5,
       Alien: 9,
       Amelie: 8,
       'In Bruges': 9,
       Amadeus: 10,
       'Kill Bill': 8,
       'Little Miss Sunshine': 8.5,
       Coraline: 7.5
   };
   for(let title of Object.keys(movieReviews)) {
       console.log(title, movieReviews[title]);
   }
   const ratings = Object.values(movieReviews);
   let total = 0;
   for(let score of ratings) {
       total += score;
   }
   total /= ratings.length
   console.log(total);