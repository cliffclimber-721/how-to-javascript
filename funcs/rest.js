function printAll(...args) {
    for(let i = 0;i < args.length;i++) {
        console.log(args[i]);
    }
    // 2번째 방법
    for(const arg of args) {
        console.log(arg);
    }
    // 3번째 방법
    args.forEach((arg) => console.log(arg))
}

printAll("chocho", "shin", "networks");
// ... 이건 rest => 나머지 변수들의 값에 대한 것들을 출력할 때 사용된다.
// 배열 형태로 저장된다.
