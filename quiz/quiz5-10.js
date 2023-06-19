class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


//  Q5. find a student with the score 90
const findScore = students.find((student) => student.score === 90);
console.log(`find a student with the score 90 :`, findScore);

// Q6. make an array of enrolled students
const enrolledStudents = students.filter((student) => student.enrolled);
console.log(`make an array of enrolled students :`, enrolledStudents);

// Q7. make an array containing only the students' scores
// map(고차함수)
// 배열 안에 들어있는 요소들을 다른 것으로 변환해준다.
// => 지정된 콜백함수를 호출하면서 각각의 요소들이 함수를 거쳐 새로운 값으로 변환하는 함수가 바로 map 이다.
const showScore = students.map((student) => student.score);
console.log(`make an array containing only the students' scores :`, showScore); // [45, 80, 90, 66, 88]

// Q8. check if there is a student with the score lower than 50
const findFifty = students.find((student) => student.score < 50);
console.log(`check if there is a student with the score lower than 50 :`, findFifty);

// some, every는 값을 true, false 로 출력해준다.
const findFiftyAgain = students.some((student)=> student.score < 50);
console.log(`check if there is a student with the score lower than 50 :`, findFiftyAgain);

// some => 하나라도 조건 맞는 애가 있으면 true
// every => 모든 조건이 충족해야한다, 안 그러면 false => true 출력하게 하려면 부정 표시를 해줘야한다.
const findEvery = !students.every((student) => student.score < 50);
console.log(`check if there is a student with the score lower than 50 :`, findEvery);

// Q9. compute students' average score
// reduce(고차함수)
// 배열들의 모든 값을 누적된 값으로 return 한다. 그래서 이전값과 최근 값을 전달해줘야한다.(인자 따로 설정)
// return 값을 무조건 설정해줘야한다.
const test = students.reduce((prev, cur) => {
    console.log(prev, cur); // Student {name: 'A', age: 29, enrolled: true, score: 45} Student {name: 'B', age: 28, enrolled: false, score: 80}
    // 나머지 값은 undefined 로 출력된다.
    return cur; // return 값을 지정해주면 cur 값이 다시 prev 값으로 들어가고, 배열 순서가 끝으로 다가올 때까지 반복을 멈추지 않는다.
}, 0); // 맨 끝에 값을 0을 줬다면, 맨 처음에 출력되는 값이 0이 된다. 초기값이라고 생각하면 좋을 것 같다.

const computeScore = students.reduce((prev, curr) => {
    return prev + curr.score;
}, 0);
console.log(computeScore);
console.log(computeScore / 5); // 원래 답

// Q10. make a string containing all the scores
// 함수에 함수를 연달아 쓸 수 있다!
const containScore = students.map((student) => student.score).join();
console.log(containScore);

// 만약 50점 이하인 애들은 뺀다 그러면 아래처럼 쓴다. 함수는 엔터쳐서 나눠도 된다.
const noFifty = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join()
console.log(noFifty);

// Bonus! do Q10 sorted in ascending order
const ascend = students.map((student) => student.score)
    .sort((a, b) => a - b).join(" ");
console.log(ascend);
// a - b => 오름차순으로
// b - a => 내림차순으로