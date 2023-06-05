 // 0, null, ' ', undefined
 // 이 4개는 다 false로 간주될 수 있다.
 
 console.log(0 == false); // true
 console.log(0 === false); // false => 0은 boolean 타입이 아니기 때문에
 console.log('' == false); // true
 console.log('' === false); // false
 console.log(null == undefined); // true
 console.log(null === undefined); // false