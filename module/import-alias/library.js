class Person {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

function sayHello(name) {
    console.log(`Hi ${name}`);
}

function sayGoodBye(name) {
    console.log(`Good Bye ${name}`)
}

const version = 1.1

export { Person, sayHello, sayGoodBye, version }