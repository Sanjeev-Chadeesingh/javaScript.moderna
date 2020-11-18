//8-18-2020 SPREAD FOR OBJECTS
    //copies properties from one object into another object literal
const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    family: 'Caninae',
    legs: 4,
    furry: true
};
const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
console.log(dog);
const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};
console.log(houseCat);
const catDog = {
    ...canine,
    ...feline
};
console.log('CATDOG BELOW');
console.log(catDog);
const tripod = {
    ...canine,
    legs: 3
};
console.log('TRIPOD');
console.log(tripod);
//ORDER MATTERS!!! TRIPOD HAS 3 LEGS AND NOT HAS 4
const notTripod = {
    legs: 3,
    ...feline
};
console.log('NOT TRIPOD');
console.log(notTripod);
const catDogClone = {...catDog};
console.log(catDogClone);
//can create array literals that also contain object literals where we use spread in different contexts
    const random = [...'hello', {...catDog}];
    console.log('RANDOM');
    console.log(random);