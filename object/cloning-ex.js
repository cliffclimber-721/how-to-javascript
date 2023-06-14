const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed_fruit = Object.assign({}, fruit1, fruit2);

console.log(mixed_fruit.color);
console.log(mixed_fruit.size)