const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed_fruit = Object.assign({}, fruit1, fruit2);

console.log(mixed_fruit.color); // blue
console.log(mixed_fruit.size); // big

// fruit1랑 fruit2가 있다면 fruit1에 color의 value 값이 있어도
// fruit2에서 마지막 값이 할당되었기 때문에 blue로 출력된다.