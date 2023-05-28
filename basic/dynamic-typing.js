let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '4';
console.log(`value: ${text}, type: ${typeof text}`);

// result 
// value: hello, type: string
// value: 1, type: number
// value: 75, type: string
// value: 2, type: number
