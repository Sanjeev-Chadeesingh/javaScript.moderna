// 8-1-2020 LOOPS!!!
console.log('Hiyah There!');
//for loops
    //we define a variable, a counter, for the loop to start at INITIAL VALUE
    //then we define a stopping point WHEN TO RUN UNTIL NO LONGER TRUE
    //then what happens to the variable each time through WHAT WE ARE COUNTING BY 
    // for(let i = 1; i <= 10; i+=3) {
    //     console.log('Hiyah!', i);
    // }
    // for(let i = 1; i <= 20; i++) {
    //     console.log(`${i} x ${i} = ${i * i}`);
    // }
    // for(let i = 50; i >= 0; i -= 10) {
    //     console.log(i);
    // }
    // for(let i = 200; i >= 0; i -= 25) {
    //     console.log(i);
    // }
//8-5-2020 
    //infinite loops
        //the ending condition is never met. Look at part 1 and part 3 in relation to part 2!!
    //forLoopArrays
    console.log(`for loop with Arrays`);
    const examScores = [98, 77, 84, 91, 57, 66];
    for(let i = 0; i < examScores.length; i++) {
        console.log(examScores[i]);
    }    
    const word = 'stressed';
    for(let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
    }
    const myStudents = [
        {
            firstName: 'Zeus',
            score: 95
        },
        {
            firstName: 'Hera',
            score: 76
        },
        {
            firstName: 'Artemis',
            score: 88 
        },
        {
            firstName: 'Apollo',
            score: 92
        }
    ];
    let total = 0;
    for(let i = 0; i < myStudents.length; i++) {
        let student = myStudents[i];
        total += student.score;
        console.log(`${student.firstName} got a ${student.score}, set against an average of ${total / myStudents.length}`);
    }
    //nested for loops
        // each iteration thru outer loop we have a complete cycle of the inner loop before the outer loop incerments or moves on to nits next iteration
        // for(let i = 1; i <= 10; i++) {
        //     console.log(`Outerloop: ${i}`);
        //     for(let j = 10; j >= 0; j -= 2) {
        //         console.log(`Innerloop: ${j}`);
        //     }
        // }
        const gameBoard = [
            [4, 32, 8, 4],
            [64, 8, 32, 2],
            [8, 32, 16, 4],
            [2, 8, 4, 2]
        ];
        let totalScore = 0;
        for(let i = 0; i < gameBoard.length; i++) {
            let row = gameBoard[i];
            for(let j = 0; j < row.length; j++) {
                totalScore += row[j];
            }
            console.log(totalScore);
        }