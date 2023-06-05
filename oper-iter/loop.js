let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// do => 일단 먼저 조건문을 실행한다.
// while => 실행한 다음 조건이 맞는지 안 맞는지 검사한다.
// 위 while 만 단독으로 쓰면 3/2/1 이 뜨지만,
// do while 을 쓰게 되면 3/2/1/0 이 뜬다.