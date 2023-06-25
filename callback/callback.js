console.log("1");
setTimeout(function() {
    console.log(`1 second`);
}, 1000); // 비동기
console.log("3");

// 이렇게도 작성 가능하다.
console.log(`first`);
setTimeout(() => console.log(`second`), 3000);
console.log(`third`);
