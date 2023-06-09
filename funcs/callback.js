function randomQuiz(ans, printY, printN) {
    if(ans === "ILY") {
        printY();
    } else {
        printN();
    }
}

const printY = function() {
    console.log("print Yes!");
};

const printN = function Nono() {
    console.log("print No!");
};

randomQuiz("wrong", printY, printN);
randomQuiz("ILY", printY, printN);