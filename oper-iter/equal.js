const strfive = '5';
const numfive = 5;

// == : 타입을 그렇게 막 따지진 않는다.
console.log(strfive == numfive);
console.log(strfive != numfive);

// === : 타입을 되게 따진다..
console.log(strfive === numfive);
console.log(strfive !== numfive);

const cho1 = { name: 'chocho' };
const cho2 = { name: 'chocho' };
const cho3 = cho1;
// cho1랑 cho2는 안의 내용이 같아도 각자 다른 메모리에 저장된다.
// => 서로 다른 reference를 가지게 된다는 것이다.


console.log(cho1 == cho2); // false
console.log(cho1 === cho2); // false
console.log(cho1 === cho3); // true