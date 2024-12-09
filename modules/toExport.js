const sayHello = (name  = '') => {
  console.log(`Hello ${name}`);
};

exports.user = {
    firstName: 'Adel',
    lastName: 'Garipov'
};

const map = new Map();

class Car {
    constructor(brnad, model, driver) {
        this.brand = brnad
        this.model = model
        this.driver = driver
    }
}

exports.sayHello = sayHello;
exports.Car = Car;
exports.map = map;

