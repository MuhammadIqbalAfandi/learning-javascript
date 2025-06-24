export class Person {
    constructor(name) {
        this.name = name
    }

    sayHello() {
       console.log(`Hello ${this.name}`)
    }
}

export function sayHello(name) {
    console.log(`Hi ${name}`);
}

export function sayGoodBye(name) {
    console.log(`Good Bye ${name}`);
}

export const version = 1.1