function calculate(cmd, a, b) {
    switch(cmd) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "remainder":
            return a % b;
        default:
            throw Error("Unknown command");
    }
}


