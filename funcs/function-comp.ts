// 얘는 type을 지정해줘야 한다.
// msg라고만 적으면 함수 자체에서 에러가 난다.

function logs(msg) {
    console.log(msg);
}

// 그래서 지금 string이라는 type을 넣어주면 확실하게 이 파라미터의 값을 알 수 있다.
function logs1(msg: string) {
    console.log(msg);
}

// 여기서 만약 0을 return한다고 할 때도 바로 에러가 난다.
// 사실 고대로 써도 괜찮은데.. 그래도 명시해두면 좋다.
function logs2(msg: string): number {
    console.log(msg);
    return 0;
}