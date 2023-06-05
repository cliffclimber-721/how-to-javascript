const browser = "Safari";

switch(browser) {
    case "IE":
        console.log("Not Windows..");
        break;
    case "Chrome":
    case "Firefox":
        console.log("Yes, Linux!");
        break;
        // 만약 같은 문구를 출력하는 case라면, case를 연달아 붙이면 된다.
    case "Safari":
        console.log("❤️ I LOVE APPLE ❤️");
        break;
    default:
        console.log("Same all..");
        break;
}