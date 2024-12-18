interface User {
    name: string;
    age: number;
    salary: ()  => number
}

const user1: User = {
    age: 30,
    name: "tom",
    salary: () => {
        return 10 * 10
    }
}

function printName (user: User): string {
    return user.name
}
function isLegal (user: User) {
    return user.age >= 18
}

console.log("age:` ",isLegal(user1))


function printSal (usr: User): number {
    console.log(usr.salary())
    return usr.salary()
}

const user1Name = printName(user1);
const salary = printSal(user1);


console.log('user1 name ', user1Name)
console.log('user1 salary ', salary)