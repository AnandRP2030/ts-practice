export default class Product {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayName() {
        console.log(`${this.name}`)
    }
}

export const sampleObj1 = new Product("mobile")