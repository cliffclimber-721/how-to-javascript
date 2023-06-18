const fruits = ['🍎', '🍌'];

for (let i = 0;i < fruits.length;i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// 사용법 알려면 cmd
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
});

// 방법은 위아래 두개
fruits.forEach((fruit) => {
    console.log(fruit);
});