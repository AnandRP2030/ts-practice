type id = number | string;

let p: id = 5;
p = "hey";
console.log(p)

interface Animal {
    legs: number;
    name: string
}

interface Birds {
    ability: string
}

type Species = Animal | Birds;

const cat: Species = {
    legs: 4,
    name: "tom",
    ability: "walk"
}

console.log('cat', cat)