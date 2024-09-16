function Mhs(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}, Energi kamu akan berkurang.`);
    };
    this.makan = function (jam) {
        this.energi += jam;
        console.log(`selmat makan ${this.nama} energi kamu akan bertambah.`);
    };
}

let mhs1 = new Mhs("agung hapsah", 250);
let mhs2 = new Mhs("haspyahdan", 500);
