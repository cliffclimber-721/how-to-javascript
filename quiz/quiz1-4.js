//  Q1. make a string out of an array => 배열로 된 값을 string으로 변환 
const fruits =  ['apple', 'banana', 'orange'];
const result = fruits.join(" ");
console.log(result);

// Q2. make an array out of a string => 배열로 만들어줘라!
const fruitsIcon = '🍎, 🥝, 🍌, 🍒';
const resultIcon = fruitsIcon.split(',');
console.log(resultIcon);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const arrR = array.reverse();
console.log(arrR);

// Q4. make new array without the first two elements
const arr = [1, 2, 3, 4, 5];
const res = arr.splice(0, 2);
console.log(arr);

// 다른 방법
const arr2 = [1, 2, 3, 4, 5];
const res2 = arr2.slice(2, 5);
console.log(res2); 


