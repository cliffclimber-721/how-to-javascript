let counter = 2;
const preIncrement = ++counter; // == 3, 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // == 3, 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter; // 3, 3
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--; // 3, 2
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
