const v1 = true;
const v2 = 4 < 2; // false

// 단순한 변수를 맨 앞에 세우고 함수 같은 건 맨 뒤에 배치해야 효율적 코딩
console.log(`or: ${v1 || v2 || check()}`);
console.log(`and: ${v1 && v2 && check()}`);
console.log(!v1);

// check == true
function check() {
    for(let i=0;i < 10;i++) {
        console.log("🧑‍💻");
    }
    return true;
}