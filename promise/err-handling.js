const getChick = () => 
    new Promise((res, rej) => {
        setTimeout(() => res("🐔"), 1000);
    });

const getEgg = chick =>
    new Promise((res, rej) => {
        //setTimeout(() => res(`${chick} => 🥚`), 1000);
        setTimeout(() => rej(new Error(`ERROR! ${chick} => 🥚`)), 1000);
    });

const getFrys = frys =>
    new Promise((res, rej) => {
        setTimeout(() => res(`${frys} => 🍳`), 1000);
    })

getChick()
    .then(getEgg)
    .catch(error => {
        return "🍞";
    })
    .then(getFrys)
    .then(console.log);