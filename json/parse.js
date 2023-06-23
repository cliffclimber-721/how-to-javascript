const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
// 위처럼 변환했을 경우, 데이터만 변환된다. (함수는 변환이 안되고 포함되지도 않는다.)

const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // error
// 아래와 같이 출력하면 당연히 값은 나온다. 하지만 얘는 string인 문자열로 출력되기 때문에 함수가 적용되지 않는다.
console.log(obj.birthDate); // 2023-06-23T07:57:20.561Z 이렇게 출력된다.

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key == "birthDate" ? new Date() : value;
})

// 그래서 위 함수를 만들어주면 아까 error 떴던 애가 이젠 정상적으로 뜬다.
console.log(obj2.birthDate.getDate());