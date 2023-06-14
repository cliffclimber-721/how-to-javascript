const user1 = { name: "sally", age: "26" };
const user2 = user1;

user2.name = "nells";
console.log(user1);

// name의 value 값이 변경되었다.
// 예전엔 빈 값을 하나 만들어서 for-in 문을 사용해 할당해줬다.
const user3 = {};

for (key in user1) {
    user3[key] = user1[key];
}
console.log(user3);

// Object.assign 을 사용한다.
const user4 = Object.assign({}, user1);
console.log(user4);
