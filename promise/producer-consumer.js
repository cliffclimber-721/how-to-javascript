// promise는 클래스여서 new를 붙이고, 오브젝트 생성 가능

// resolve : 기능을 정상적으로 수행해 최종적으로 데이터를 전달해준다.
// reject : 기능 수행 중 오류가 생기면 호출하는 값

// consumer
const promise = new Promise((resolve, reject) => {
    // 연산량이 무거운 값들을 수행할 때 사용한다.
    console.log(`Doing something...`);
    setTimeout(() => {
        resolve('chochos');
        reject(new Error('NO NETWORK'));
    }, 2000)
});

// 새로운 promise가 만들어질 때, executor가 자동적으로 실행된다.

// producer
// then => promise가 정상적으로 잘 진행되었고, 해당 값이 then으로 인해 값을 부여받아온다.
promise
    // then 은 성공 시
    .then((value) => {
        console.log(value);
    })
    // catch 는 에러 잡을 때
    .catch(error => {
        console.log(error);
    })
    // finally 성공 실패 상관없이 호출
    .finally(() => {
        console.log(`finally example`);
    })