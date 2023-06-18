// 어떤 값이 몇번째에 있는지 (인덱스값 출력하기)
const fruits = ['🍇', '🍎', '🍌', '🥝', '🍑', '🍐'];
console.log(fruits.indexOf('🍎')); // 1
console.log(fruits.indexOf('🍑')); // 4
console.log(fruits.includes('🥥')); // false
console.log(fruits.indexOf('🥥')); // -1 => 해당 값이 없으면 -1을 출력해준다.

fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 1
// 만약에 같은 값을 하나 더 넣었다면 제일 첫번째로 해당되는 값을 출력하게 된다.
console.log(fruits.lastIndexOf('🍎')); // 6
// lastIndexOf는 마지막 값을 내뱉게 된다.