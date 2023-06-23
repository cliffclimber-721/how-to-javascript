// Object to JSON

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    // 함수가 json에 포함되지 않는다.
    // object에 있는 데이터가 아니기 때문에 json에 포함되지 않기 때문이다.
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

rabbitJson = JSON.stringify(rabbit);
console.log(rabbitJson);

// 원하는 값만 출력하고 싶거든 이렇게 작성한다.
nameRabbit = JSON.stringify(rabbit, ['name']);
console.log(nameRabbit);

// replacer 사용하는 방법
anotherRabbit = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

console.log(anotherRabbit);
// 아래와 같이 결과값이 나온다.
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2023-06-23T07:51:01.413Z
// key: jump, value: () => {
//        console.log(`${name} can jump!`);
//    }

// 값을 바꾸고 싶다거나, 아니면 값에 대해 좀 더 까다롭게 판별하기 위해서
showRabbit = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "chocho" : value;
});

console.log(showRabbit);