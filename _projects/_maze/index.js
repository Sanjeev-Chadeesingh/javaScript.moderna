//1 importing in everything we need from Matter, after a destructuring
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
//talking x and y axis
const cellsHorizontal = 11;
const cellsVertical = 11;
//5 dynamically storing width and height of canvas
const width = window.innerWidth;
const height = window.innerHeight;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = width / cellsVertical;
//2 boilerplate!
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    //rendering a world element on the body
    element: document.body,
    engine: engine,
    options: {
        //this gives us solid shapes, with colors picked at random
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

//4 demo recreation
//Walls
const walls = [
    //top, bottom, left, right
        //1distance from top left to center of shape   2how many units down from top left corner   3total width of shape   4total height of shape
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
//adding walls to world
World.add(world, walls);
//6 Maze Generation
const shuffle = (arr) => {
    let counter = arr.length;
    while(counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter--;
        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};
    //create array with three possible elements, with null elements* (set to the arg)
        //created array has its values mapped, and generates a new array with false elements, numbered to the initial args of the array (vid 277)
const grid = Array(cellsVertical)
.fill(null)
.map(() => Array(cellsHorizontal).fill(false));

//verticals
const verticals = Array(cellsVertical)
.fill(null)
.map(() => Array(cellsHorizontal - 1).fill(false));

//horizontals
const horizontals = Array(cellsVertical - 1)
.fill(null)
.map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

//function to call over and over, that goes through algorithm
const stepThroughCell = (row, column) => {
    //if i have visited cell at [row, column], then return
    if(grid[row][column]) {
        return;
    }

    //mark this cell as being visited
    grid[row][column] = true;
    
    //assemble randomly ordered list of neighbors
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    
    //for each neighbor...
    for(let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;

    //see if neighbor is out of bounce (we might end up trying to visit a cell neighbor that is outside the bounds of the grid)
        if(nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue;
        }

    //check to see if we have visited that neighbor, continue to next neighbor
        if(grid[nextRow][nextColumn]) {
            continue;
        }
    //remove a wall from either horizontals or verticals
        if(direction === 'left') {
            verticals[row][column - 1] = true;
        } else if(direction === 'right') {
            verticals[row][column] = true;
        } else if(direction === 'up') {
            horizontals[row - 1][column] = true;
        } else if(direction === 'down') {
            horizontals[row][column] = true;
        }
        stepThroughCell(nextRow, nextColumn);

    //visit that next cell


    }

};
stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open) {
            return;
        } 

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            10,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    });
});

verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            10,
            unitLengthY,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    });
});

//GOAL
const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * .7,
    unitLengthY * .7, {
        isStatic: true,
        label: 'goal',
        render: {
            fillStyle: 'green'
        }
    },
);

World.add(world, goal);

//BALL
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    { label: 'ball', render: { fillStyle: 'blue' } }

);
World.add(world, ball);

//detecting keypresses
document.addEventListener('keydown', (e) => {
    const { x, y } = ball.velocity;
    if(e.keyCode === 87) {
        Body.setVelocity(ball, {x, y: y - 5});
    }
    if(e.keyCode === 68) {
        Body.setVelocity(ball, {x: x + 5, y});
    }
    if(e.keyCode === 83) {
        Body.setVelocity(ball, {x, y: y + 5});
    }
    if(e.keyCode === 65) {
        Body.setVelocity(ball, {x: x - 5, y});
    }
});

//win condition
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
       const labels = ['ball', 'goal'];
       if(labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
           document.querySelector('.hidden').classList.add('.winner');
          world.gravity.y = 1;
            world.bodies.forEach((body) => {
                if(body.label === 'wall') {
                    Body.setStatic(body, false);
                }
            })
       }
    })
})