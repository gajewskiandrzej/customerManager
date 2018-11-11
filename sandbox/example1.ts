console.log("Hello world!");

let x: number = 3;
let y: string;
let z: boolean;
y="napis";

z = true;
z = false;


let xs: number[] = [1,2,3,4,5];
console.log(xs.length);

let ys: Array<number>;

let zs = [1,4,8, ...xs];
console.log(zs);

let g ="aaa";
let gg = 'bbb';

let ggg = `Liczba x = ${x}`;

console.log(`tablica xs ${xs[1]}, ${zs[0]}`);

console.log(ggg);

interface Customer{
    name: string;
    age?: number;
    address: Address;
}

interface Address{
    street: string;
    city: string;
}

function welcome(customer: Customer): string {
    return `Welcome ${customer.name}`;
}

console.log(welcome({
    name: "Jachu", age:15, 
    address:{
        street: "Ulica",
        city: "Łowicz"
    }
}));