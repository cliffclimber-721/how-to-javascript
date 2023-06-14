const person1 = { name: "cho", age: 20 };
const person2 = { name: "shin", age: 15 };
const person3 = { name: "kim", age: 30 };
// const person4 = { name: " " }; // 4번째 사람을 만들기 위해선?
const person4 = makePerson("coco", 5);
const person5 = Person("tutu", 10);

// 이렇게 만들 수 있고
function makePerson(name, age) {
    return {
        // 키값과 value의 변수명이 같으면 한번만 쓰면 된다.
        name,
        age
    };
}

// 이게 좀 더 좋다.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(person4);
console.log(person5);