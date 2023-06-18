const fruits = ['🍎', '🍌'];

// push
fruits.push('🥝', '🍒'); // 값을 맨 끝으로 집어 넣는다.
console.log(fruits); // ['🍎', '🍌', '🥝', '🍒']

// pop
fruits.pop();
console.log(fruits); // ['🍎', '🍌', '🥝']

// unshift => 값이 맨 앞으로 들어간다.
fruits.unshift('🍋', '🍇');
console.log(fruits); // ['🍋', '🍇', '🍎', '🍌', '🥝']

// shift => 앞에서부터 데이터가 빠지게 된다.
fruits.shift();
console.log(fruits);

// 속도 => shift/unshift < push/pop

// splice => 몇 개 지울거고, 인덱스를 지정해주지 않으면 원하는 걸 지울 수 없고 앞에 하나 빼고 다 삭제된다.
fruits.push('🍑', '🍐');
console.log(fruits); // ['🍇', '🍎', '🍌', '🥝', '🍑', '🍐']
fruits.splice(1, 1);
console.log(fruits); // ['🍇', '🍌', '🥝', '🍑', '🍐']
fruits.splice(1, 1, '🫒', '🍉');
console.log(fruits); //[ '🍇', '🫒', '🍉', '🥝', '🍑', '🍐']

// 배열 2개 사용하기
const veggies = ['🥕', '🥔'];
const newGrocery = fruits.concat(veggies); // concat => 기존 배열을 신규 배열에 갖다붙일 수 있다.
console.log(newGrocery); // ['🍇', '🫒', '🍉', '🥝', '🍑', '🍐', '🥕', '🥔'] => 맨 끝에 값이 붙여진다.