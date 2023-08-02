class UserStorage {
    loginUser(id, psd) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (
                    (id === "chocho" && psd === "0721") ||
                    (id === "jee" && psd === "1998")
                ) {
                    res(id);
                } else {
                    rej(new Error(`NOT FOUND`));
                }
            }, 2000);
        })
    }
    getRoles(user) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(user == "chocho") {
                    res({ name: "chocho", role: "developer"});
                } else {
                    rej(new Error(`NO ACCESS`));
                }
            }, 1000);
        })
    }
}


const userStorage = new UserStorage();
const id = prompt("ID: ");
const psd = prompt("PASSWORD: ");
userStorage.loginUser(id, psd)
    .then(userStorage.getRoles)
    .then(user => alert(
        alert(`Hello ${user.name}, you are a ${user.role}`)
    ))
    .catch(console.log);
