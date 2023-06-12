// 상속은 한번에 정의하고, 공통적으로 쓰이는 속성값을 재사용하면 간편하다.
// 재사용 가능하기 때문에 유지보수가 쉽다.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`Drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

// 상속을 사용할 때 extends 를 쓴다.
class Rectangle extends Shape {}
// 이 예시를 보면 '다양성' 이 뭔지 알 수 있다(overriding)
// 삼각형의 넓이는 (가로 * 세로) / 2 의 공식을 사용해야해서 위 클래스에서 지정한 공식은 어긋나다.
// 필요한 함수에 대해 재정의해서 사용할 수 있다(=overriding)
class Triangle extends Shape {
    draw() {
        // super => 부모의 draw 함수, 즉 Shape 클래스에 정의된 draw 함수의 값도 함께 출력하고 싶다면,
        // super 를 사용해서 아래와 같이 표기한다.
        // 원래 super 가 없다면 console.log("🔺"); 이 로그만 보여지게 된다.(다양성 때문에..)
        super.draw();
        console.log("🔺");
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: ${this.color}`;
    }
}

const rect = new Rectangle(20, 20, 'blue');
rect.draw();
console.log(rect.getArea());
const tri = new Triangle(20, 20, 'red');
tri.draw();
console.log(tri.getArea());