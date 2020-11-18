//8-28-2020 DESTRCTURING FUNCTION PARAMETERS *
//extract or unpack values from the argument(s) passed in
const shifter = {
    first: 'Carol',
    last: 'Perez',
    country: 'USA',
    title: 'Gray Shifter'
};

function print({first, last, title}) {
    console.log(`${first} ${last}, ${title}`);
};
print(shifter);

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];
function parseResponse([proto, status, contentType]) {
    console.log(`Status: ${status}`);
};
parseResponse(response);