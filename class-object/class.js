class Person {
    constructor(name, age) {
        // this 는 자기 참조 변수
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}, hello!`);
    }
}

const chocho = new Person("cho", 26);
console.log(chocho.name);
console.log(chocho.age);
chocho.speak();