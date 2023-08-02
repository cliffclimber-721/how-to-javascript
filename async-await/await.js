function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// 얘는 콜백 지옥이다..
function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}

// async await를 쓰니까 위 코드보다 더 간단해졌다.
async function pickingFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
    } catch {
        
    } return `${apple} + ${banana}`;
}

pickingFruits().then(console.log);

