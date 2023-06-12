class Article {
    static publisher = "ChoCho Coding";
    constructor(articleNum) {
        this.articleNum = articleNum;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }

}

const artic1 = new Article(1);
const artic2 = new Article(2);

// static 사용 안했다면 아래와 같이 작성했을 것이다.
// 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는거라면
// static을 사용하는 것이 좋다.
console.log(artic1.publisher);

console.log(Article.publisher);
Article.printPublisher();