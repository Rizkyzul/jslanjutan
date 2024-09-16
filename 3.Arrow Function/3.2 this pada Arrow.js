// konsep thius pada arrow function

// contoh constructor fun

// const Mahasiswa = function () {
//     this.nama = "kiki";
//     this.umur = 20;
//     this.sayHay = function () {
//         console.log(`hallo ${this.nama}, umur anda ${this.umur}`);
//     };
// };

// const kiki = new Mahasiswa();

// contoh Arrow
const Mahasiswa = function () {
    this.nama = "kiki";
    this.umur = 20;
    this.sayHay = function () {
        console.log(`hallo ${this.nama}, umur anda ${this.umur}`);
    };
};

const kiki = new Mahasiswa();
