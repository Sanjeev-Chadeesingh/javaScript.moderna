//8-25-2020 NESTED DESTRUCTURING
const results = [{
    first: 'Elvis',
    last: 'Prestley',
    country: 'USA'
},
{
    first: 'John',
    last: 'Lennon',
    country: 'UK'
},
{
    first: 'Neil',
    last: 'Young',
    country: 'Canada'
}
];
//country of second place
const [, {country}] = results;
console.log(country);