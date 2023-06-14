const named = "chocho";
const age = "20";

// 1번째 방법
print(named, age);

// 2번째 방법
function print(named, age) {
    console.log(named);
    console.log(age);
}

// 오브젝트 생성 방법은 { key: value } 이다. => object literal
// 아니면 new를 이용해서 클래스 템플릿을 생성한다. => object constructor

function prints(person) {
    console.log(person.name);
    console.log(person.age);
}

const names = { name: "cho", age: "21" };
prints(names);

names.hasJob = true;