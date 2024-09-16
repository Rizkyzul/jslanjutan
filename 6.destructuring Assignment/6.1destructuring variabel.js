// sintax pada js yg membuat kita dapat membongkar nilai dari array dari object kedalam variabel yang terpisah

// penggunaan sederhana

const angka = [1, 3, 6];
const [a, b, c] = angka;
console.log(b); //output 3

// lainnya
const mhs = {
    nama: "Rizky",
    umur: 20,
    email: "kiki@gmail",
};

const { umur, nama, email } = mhs;
console.log(nama); //output Rizky

// again menggunakan ski[ping items]
const namaku = ["halo", "saya", "rizky", "ganteng"];
const [salam, , koko, naMa] = namaku;
console.log(salam);

// swap items
let A = 2;
let B = 4;
[A, B] = [B, A];
console.log(A); //op 4

// return vales pada function
function cobain() {
    return [9, 2];
}

const [e, d] = cobain();
console.log(e); //op 9

// rest parameter
const [O, I, ...vel] = [1, 2, 4, 5, 3, 31];
console.log(vel);

//des object
const Mahasiswa = {
    nama1: "kiki",
    umur1: 12,
};

const { nama1, umur1 } = Mahasiswa;
console.log(umur1);
console.log(nama1);

// assigment tampa deklasari object
({ nama2, umur2 } = {
    nama2: "kiko",
    umur2: 90,
});
console.log(umur2);
console.log(nama2);

// assigment ke variabel baru

const Mahasiswa1 = {
    nama1: "Siki",
    umur1: 122,
};

const { nama1: n, umur1: p } = Mahasiswa1;
console.log(p);
console.log(n);

// default value
const Mahasiswaq = {
    namA: "kiki",
    umuR: 12,
};

const { namA, umuR, Email = "kkj@gmail.com", email2 } = Mahasiswaq;
console.log(Email);
console.log(email2); //akan undifine karena ridak ada isi dari email 2

// mengambil field pada object, setelah dikirim sebagai parameter untuk funtion

const MHS = {
    id: 1222,
    Nama: "kiki",
    Umur: 12,
    email: "kiki@gmail.com",
};

function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(MHS));
