function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// Promise.all => 배열 전달 시 모든 promise들이 병렬적으로 다 받을때까지 모아준다.
// 배열 형태로 보여준다.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// Promise.race => 배열에 전달된 promise 중에서 가장 먼저 값을 return 하는 값을 출력
function pickOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOne().then(console.log);