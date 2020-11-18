// 8-5-2020 while loops
    //good for when unsure how long a loop will run
    // const target = Math.floor(Math.random() * 10);
    // let guess = Math.floor(Math.random() * 10);
    // while(guess !== target) {
    //     console.log(guess);
    //     guess = Math.floor(Math.random() * 10);
    // }
    // console.log(`Target: ${target}. Guess: ${guess}.`);
    // //break keyword
        //can use inside loops to break out of them
        const target = Math.floor(Math.random() * 10);
        let guess = Math.floor(Math.random() * 10);
        while(true) {
            if(target === guess) break;
            console.log(`Target: ${target}. Guess: ${guess}.`);
            guess = Math.floor(Math.random() * 10);
        }
        console.log(`Target: ${target}. Guess: ${guess}.`);
        console.log(`Congrats you win!!!`);