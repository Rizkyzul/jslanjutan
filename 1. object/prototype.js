// Versi Prototype

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Selamat Makan ${this.nama}`;
};
Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 1.5;
    return `Selaamat tidur ${this.nama}`;
};
Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Selamat Bermain ${this.nama}`;
};

let mhs1 = new Mahasiswa("agung", 20);

// Versi Class
class Mhs {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `Selamat Makan ${this.nama}`;
    }
    tidur(jam) {
        this.energi += jam * 1.5;
        return `Selamat tidur ${this.nama}`;
    }
    main(jam) {
        this.energi -= jam;
        return `Selamat Bermain ${this.nama}`;
    }
}

let mhs2 = new Mhs("jujun", 12);
