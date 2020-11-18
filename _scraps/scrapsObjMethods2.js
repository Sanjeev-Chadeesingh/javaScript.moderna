//8-28-2020 *COMPUTED PROPERTIES
    //ability to add property with dynamic key
    //an object where the key is set to the value of role which is host, and then the value for that key is jools holland, the variable person
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';
const team = {
    [role]: person,
    [role2]: person2
};
console.log('Team Below');
console.log(team);
const carol = {
    first: 'Carol',
    last: 'Perez',
    animals: ['pantheratrox', 'amphicyon', 'pelago', 'melvillei'],
    title: 'Gray Shifter'
};
function addProp(obj, k, v) {
    const copy = {...obj, [k]: v};
    return copy;
}
console.log(addProp(carol, 'disposition', 'good'));
