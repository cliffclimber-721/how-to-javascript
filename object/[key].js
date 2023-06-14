const names = { name: "cho", age: "21" };

// 두 가지 방식으로 출력할 수 있다.
console.log(names.name); // cho
console.log(names['name']); // cho

// 즉, 이 두개도 같은 말이다.
names.hasJob = true;
names['hasJob'] = true;
console.log(names.hasJob);

function printVal(obj, key) {
    //console.log(obj.key); // undefined
    // obj.key -> obj 안에 key라는게 있냐는 뜻
    console.log(obj[key]);
}

printVal(names, 'name');