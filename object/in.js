const names = { name: "cho", age: "26" };

// 안에 해당하는 키값이 있는지 확인
console.log('name' in names); // true
console.log('age' in names); // true
console.log('random' in names); // false
console.log(names.random); // undefined