interface Person {
  name: string;
  age: number;
  isAdult: boolean;
  greet(value: string): void;
}

class Driver implements Person {
  name: string;
  age: number;
  isAdult: boolean;

  constructor(n: string, age: number, isAdult: boolean) {
    this.name = n;
    this.age = age;
    this.isAdult = isAdult;
  }
  greet(value: string) {
    console.log("hai ", value);
  }
}

const obj1 =  new Driver("first", 33, true);
console.log('obj1', obj1)
