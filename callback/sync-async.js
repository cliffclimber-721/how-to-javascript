console.log(`first`);
setTimeout(() => console.log(`second`), 1000);
console.log(`third`);

// 동기 실행 => 즉각적 반응
function printImme(print) {
    print();
}

printImme(() => console.log(`hello`));
// first third hello 가 다 출력된 후 second 가 출력된다.

// 비동기 실행 => 언제 실행될지 모름
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}

printDelay(() => console.log(`async callback`), 2000);
// first third hello second 가 출력된 이후 async callback

// setTimeout 과 같은 함수를 사용하면 callback 함수를 사용했다고 하고, 비동기적 실행했다고 할 수 있다.
