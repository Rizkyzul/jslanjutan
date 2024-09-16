// prototype

// object literal
// problem tidak efektif untuk objek yang banyak

let mahasiswa = {
    nama: "Agus",
    Nim: 41236597,
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama},selamat makan`);
    },
};

let mahasiswa2 = {
    nama: "lena",
    Nim: 41236592,
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama},selamat makan`);
    },
};

//function declaration
// problem tidak efektif

// bisa saja seperti ini dari aawalnya yang gabung di dalam fun mhs

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama} `);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`selamat bermain ${this.nama}`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`selamat istirahat ${this.nama}`);
    },
};

function mhs(nama, energi) {
    let mhs = Object.create(methodMahasiswa);
    mhs.nama = nama;
    mhs.energi = energi;
    // mhs.makan = methodMahasiswa.makan;
    // mhs.main = methodMahasiswa.main;
    // mhs.tidur = methodMahasiswa.tidur;

    // mhs.makan = function (porsi) {
    //     this.energi += porsi;
    //     console.log(`hallo ${this.nama} selamat makan`);
    // };
    // mhs.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`selamat bermain ${this.nama}`);
    // };

    return mhs;
}

let kiki = mhs("kiki", 20);
let panjul = mhs("juel", 10);

//
//
// constructor function
function Mhswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama} selamat makan`);
    };
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`selamat bermain ${this.nama}`);
    };
}
let mhs1 = new Mhswa("agung", 200);
