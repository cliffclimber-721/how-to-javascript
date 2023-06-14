const names = { name: "cho", age: "30" };

for (key in names) {
    console.log(key);
}

const array = [1, 2, 3, 5];

// for 문을 사용해서 찍어내는 방법은 2가지다.
for (let i = 0; i < array.length;i++) {
    console.log(array[i])
}

// 이렇게 출력하려면 value를 꼭 써야한다.
for (value of array){
    console.log(value);
}