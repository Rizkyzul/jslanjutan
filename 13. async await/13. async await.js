/**
asychronouse Function
1. fungsi yang berjalan secara asynchronous
2. menghasilkan (implisit) promise
3. cara penulisannya seperti synchronouse function (function biasa)
*/

// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("selesai");
//     }, 2000);
// });
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5999;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, 2000);
        } else {
            reject("Kelamaan");
        }
    });
}
// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}
cobaAsync();
