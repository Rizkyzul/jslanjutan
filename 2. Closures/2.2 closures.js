function init() {
    let nama = "rizky";
    function tampilNama() {
        console.log(nama);
    }
    tampilNama();
}
init();

function init() {
    return function (nama) {
        console.log(nama);
    };
}
let panggilNama = init();
panggilNama("kiki");
panggilNama("kiko");

//study kasus

function ucapanSalam(waktu) {
    return function (nama) {
        console.log(`hallo ${nama}, selamat ${waktu}, Have a Nice day!`);
    };
}

let selamatPagi = ucapanSalam("Pagi");
let selamatSiang = ucapanSalam("Siang");
let selamatMalam = ucapanSalam("Malam");

selamatPagi("kiki");
selamatSiang("elen");
selamatMalam("kiki dan elen");

console.dir(selamatMalam);

// study kasus lain

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());
