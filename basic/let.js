// 변수
// let 은 변수의 값이 계속 바뀐다.

let name = "cho";
console.log(name);
name = "hello";
console.log(name);

// 근데 만약 block scope를 쓰게 된다면 상황이 달라진다.
// block scope 안에서는 var 변수를 선언해도 효과가 없다.

{
    let names = "shin";
    console.log(names);
    names = "bye";
    console.log(names);
}
// 아래와 같은 코드를 작성하게 되면 Uncaught ReferenceError: names is not defined 과 같은 에러가 발생한다.
// 이 말은 즉, 저 위에 선언된 변수인데 왜 밖에서 쓰는건지 하고 묻는거랑 같다.
console.log(names);