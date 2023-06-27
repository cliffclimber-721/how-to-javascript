const fetchNum = new Promise((res, rej) => {
    setTimeout(() => res(1), 1000);
});

fetchNum
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((res, rej) => {
            // 여기서 6까지 찍히고 2초 뒤에 5가 출력된다.
            setTimeout(() => res(num - 1), 2000);
        });
    })
    .then(num => console.log(num));
    // 그래서 마지막 값이 5