type Mixed = number | string;
const returnFirstElem = (arr: (string | number)[]) => {
    return arr[0]
}

const x2 = returnFirstElem([1, '2']);
const x3 = returnFirstElem(["hey", "2"]);
console.log(typeof x2, typeof x3);
console.log(x2);
// console.log(x3.toLowerCase()); // can't work

// generics
const returnFirstElem2 = <T>(arr: T[]): T => {
    return arr[0]
}

const x4 = returnFirstElem2<number>([1, 3]);
const x6 = returnFirstElem2<string>(["hey", "2"]);
console.log(x6.toLowerCase())