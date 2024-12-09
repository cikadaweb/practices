let a = 5;

if(a === 5) {
    const promise = await import('../modules/toExport.mjs');
    console.log(promise);
}

// promise.then(({sayHello, map, Car, user}) => {
//     sayHello(user.firstName);
//
//     const car = new Car('mini', 'cooper', user);
//
//     console.log('car: ', car);
//
//     map.set(car, user);
//     console.log('map: ', map);
// });