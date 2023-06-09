// Immediately Invoked Function Expression

// 원래 우리가 함수를 지정하고 선언해줄 때

function printHello() {
    console.log("Hello");
}

printHello();

// 이렇게 사용하는데

(function printHellos() {
    console.log("Hello!");
})();

// 이렇게도 사용할 수 있다.
// 다른 점은 function 전체를 소괄호로 묶고 마지막에 (); 를 추가해주는 것이다.
