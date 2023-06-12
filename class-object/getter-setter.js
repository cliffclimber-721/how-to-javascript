class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 나이가 -1일 수는 없다.
    // get으로 값을 return
    get age() {
        return this._age;
    }
    // set으로 값을 설정 => value 값을 받아와야한다.
    set age(value) {
        // if (value < 0) {
        //    throw Error(`Age cannot be negative.`)
        //}
        this._age = value < 0 ? 0 : value;
    }
}
// get age() 정의하는 순간 this.age는 get을 호출하게 된다.
// set age(value) 정의하는 순간 age는 set을 호출하게 된다.
// 그래서 set age(value) 의 값에 -1 이 들어가면 call stack size exceeded 하고 에러가 뜬다.
// 그 후 변수 지정은 앞에 _를 붙여서 한다.
// 총 3개의 필드가 있는데 firstname, lastname, _age 이렇게 있다.
const user1 = new User("Jee", "Shin", -1);
console.log(user1.age);