// menangani callback hell

// ini pakai ajax
$.ajax({
    url: "http://www.omdbapi.com/?apikey=babbd786&s=avengers",
    success: (movies) => console.log(movies),
});

// ini pakai vanila js (model lama)
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) [console.log(JSON.parse(xhr.response))];
    } else {
        console.log(xhr.responseText);
    }
};
xhr.open("get", "http://www.omdbapi.com/?apikey=babbd786&s=avengers");
xhr.send();

// menggunakan fetch (modern)
fetch("http://www.omdbapi.com/?apikey=babbd786&s=avengers")
    .then((Response) => Response.json())
    .then((Response) => console.log(Response));

//
// fetch mengembalikannya promise (janji)
// promise merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asycronus yang akan terjadi di masa akan datang
// janji bisa terpenuhi dan ingkar
// terpenuhi (states (fulfilled))
// ingkar (rejected )
// pending (waktu tunggu janji dijalankan atau tidak)
// 3 fungsi callback :
// (resolve(ketika janji terpenuhi), reject(tidak terpenuhi), dan  finally (janji terpenuhi ataupun tidak))
// aksi ( then (terpenuhi), tidak terpenuhi (catch))

// contoh promise sederhana (1)
let ditepati1 = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati1) {
        resolve("Janji Ditepati");
    } else {
        reject("ingkar janji...");
    }
});
janji1.then((Response) => console.log("ok :" + Response)).catch((Response) => console.log("Not OK :" + Response));

// contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve("ditepati setelah beberapa saat");
        }, 2000);
    } else {
        setTimeout(() => {
            resolve("tidak ditepati setelah beberapa saat");
        }, 2000);
    }
});

console.log("mulai");
console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log("selesai menunggu!"))
    .then((Response) => console.log("ok : " + Response))
    .catch((Response) => console.log("Not OK : " + Response));
console.log("selesai");

// promise.all
// ingin menjalankan promise sekaligus

const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                judul: "animetod",
                sutradara: "panjul",
                pemeran: "anjasmara",
            },
        ]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                kotra: "Bandung",
                temp: 26,
                kondisi: "cerah",
            },
        ]);
    }, 500);
});

Promise.all([film, cuaca])
    // .then((Response) => console.log(Response));
    // sprite operator
    .then((Response) => {
        const [film, cuaca] = Response;
        console.log(film);
        console.log(cuaca);
    });
