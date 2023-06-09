const print = function () { // anonymous function => 함수의 이름이 따로 지정되지 않았다.
    console.log("print!");
}

print();

// 다른 변수에 할당하게 되면 가리키는 해당 함수를 호출한다.
const printAgain = print;
printAgain();