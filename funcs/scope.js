let globalMsg = "global"; // => 얘는 전역변수
// 밖에선 안이 보이지 않고 안에서만 밖을 볼 수 있다.
function printMsgs() {
    // 이 안에서 변수 설정 => 지역변수
    // 이 안에서만 변수 접근 가능, 밖에서 출력하려면 msg는 출력이 안된다.
    let msg = "hello";
    console.log(msg);
    console.log(globalMsg);
    // 함수 중첩도 가능하다.
    function printAnother(){
        console.log(msg);
        let childMsg = "hihi~";
    }
}
printMsgs();
