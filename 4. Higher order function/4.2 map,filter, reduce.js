const angka = [-1, -2, -3, -4, 0, 1, 2, 3, 4, 5, 10, 13, 14]; //angka random

// pakai for

const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        angkaBaru.push(angka[i]);
    }
}
console.log(angkaBaru);

// filter (mencari angka >= 3)
const newAngka = angka.filter(function (a) {
    return a >= 3;
});
console.log(newAngka);

// atau bisa lebih singkat lagi
const newAngka2 = angka.filter((a) => a >= 3);
console.log(newAngka2);

// map (menggunakan fungsi yang baru)
// mengkali angka dengan 2

const newAngka3 = angka.map((a) => a * 10);
console.log(newAngka3);

// reduce (melakukan sesuatu terhadap seluruh elemen pada array)
// jumlkn seluruh elemen pada array

const newAngka4 = angka.reduce((accumulator, curretValue) => accumulator + curretValue);
console.log(newAngka4);

// method chaining (berantai)
// cari angka > 5
// x 3
// jumlahkan

const hasil = angka
    .filter((a) => a >= 5)
    .map((a) => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);
