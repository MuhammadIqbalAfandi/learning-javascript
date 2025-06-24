export class Library {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hello, ${this.name}`);
    }
}

export const versionLibrary = 1.1