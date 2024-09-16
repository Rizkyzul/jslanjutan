// bentuk lain lebih ringkas dari function expression

// fun ex
let Tnama = function (nama) {
    return `hallo ${nama}`;
};
console.log(Tnama("kiki"));

// arrow
let tampilNama = (nama1) => {
    return `hallo ${nama1}`;
};
console.log(tampilNama("kiko"));

// implisit return (buang kurawal dan return)
let tampilNama1 = (nama1) => `hallo ${nama1}`;
console.log(tampilNama1("kika"));

// jika 2 parameter atau lebih
let namtu = (nama, waktu) => {
    return `hallo ${nama}, Selamat ${waktu}`;
};

console.log(namtu("rizky", "siang"));

// tampa parameter
const nopara = () => "halo duniaaaaa!";
console.log(nopara());

// arrow fun Map
let mahasiswa = ["Muhammad Abdul Ghany", "Rizky Zulkarnaen", "Tsya Nurul"];

// menggunakan fun biasa =

let jumlahHuruf1 = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahAngkaHuruf);

// menggunakan arrow
let JumlahHuruf = mahasiswa.map((nama) => nama.length);
console.log(JumlahHuruf);
//  atau
let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);
