export const sayHello = (name  = '') => {
    console.log(`Hello ${name}`);
};

export const user = {
    firstName: 'Adel',
    lastName: 'Garipov'
};

export const map = new Map();

export class Car {
    constructor(brnad, model, driver) {
        this.brand = brnad
        this.model = model
        this.driver = driver
    }
};