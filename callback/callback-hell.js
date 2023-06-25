class UserStorage {
    loginUser(id, psd, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "chocho" && psd === "0721") ||
                (id === "jee" && psd === "1998")
            ) {
                onSuccess(id);
            } else {
                onError(new Error(`NOT FOUND`));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user == "chocho") {
                onSuccess({ name: "chocho", role: "developer"});
            } else {
                onError(new Error(`NO ACCESS`));
            }
        }, 1000);
    }
}

// 콜백함수를 많이 쓰면,,
// 가독성이 너무 많이 떨어진다 => 어떻게 연결되어있는지 한 눈에 확인하기 어렵다.

const userStorage = new UserStorage();
const id = prompt("ID: ");
const psd = prompt("PASSWORD: ");
userStorage.loginUser(
    id, 
    psd, 
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you are a ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);