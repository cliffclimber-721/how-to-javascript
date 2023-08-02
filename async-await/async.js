function fetchUser() {
    // 10초 후에 정보 전달을 받는다고 가정
    return 'chocho';
}

const user = fetchUser();
console.log(user);

// 비동기적인 처리를 하지 않게되면 한 줄씩 처리되다 보니까 시간이 많이 걸린다.

function fetchUser1() {
    return new Promise((resolve, reject) => {
        resolve('chochos');
    });
}

const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);

// return을 쓰면 pending 이 뜬다. 결과값을 보이게 하려면 resolve를 쓴다.
// Promise를 쓰지 않으려면 async를 앞에 쓴다.

async function fetchUser2() {
    return 'shin';
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);