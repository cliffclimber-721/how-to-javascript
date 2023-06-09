function showMsg(msg, from = "unknown") {
    console.log(`${msg} by ${from}`);
}

showMsg("Hi!");

// 원래 코드는 아래와 같은데 default가 생겨나면서 파라미터 옆에 원하는 값을 default로 지정해둔다.
//function showMsg(msg, from) {
//    if(from === undefined) {
//            from = "unknown";
//}
//    console.log(`${msg} by ${from}`);
//}

