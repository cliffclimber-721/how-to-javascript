const simplePrint = function() {
    console.log("simplePrint!");
}

// 위 함수와 같은 뜻이다.
// 중괄호 없이 사용 가능하다. => 만약 사용하게 된다면 값을 출력할 때 return 을 사용한다.
const simplePrint1 = () => console.log("simplePrint!");

const sums = (a, b) => a + b;