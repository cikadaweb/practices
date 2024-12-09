const {sayHello, user, map, Car} = require('../modules/toExport');
const fs = require('node:fs/promises');

sayHello(user.firstName);

const car = new Car('mini', 'cooper', user);

console.log('car: ', car);

map.set(car, user);
console.log('map: ', map);

try {
    fs.writeFile('output.txt', JSON.stringify(car), 'utf8');
} catch (error) {
    console.log(error)
}

console.log('1');