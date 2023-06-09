function sum(a, b) {
    return a+b;
}

const result = sum(3, 4);
console.log(`sum: ${a} + ${b} = ${result}`);


// early return
function upgradeUser(user) {
    if(user.point >= 10) {
        return;
        // 조건이 맞지 않을 때 빨리 return 하고
        // 조건이 맞을 때만 그 다음에 필요한 로직을 실행하는 것이 연산량에 더 좋다.
        // if-else 쓰는 것보다 훨 낫다..
    }
}