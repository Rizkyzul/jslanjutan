// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(kali);
// console.log(jumlah);

// const [tambah, kurang, kali, bagi = "nilai tidak ditemukan"] = kalkulasi(3, 4);
// console.log(tambah);
// console.log(bagi);

// menggunakan objek

function newKalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        bagi: a / b,
        kali: a * b,
    };
}

const { kurang, tambah, kali, bagi } = newKalkulasi(5, 3);
console.log(kurang);

// des function arguments
const mhs1 = {
    nama: "rizky",
    namaProdi: "Teknik Informatika",
    umur: 20,
    email: "sehatselalu@gmail.com",
    nilai: {
        tugas: 70,
        uts: 78,
        uas: 80,
    },
};

function cetakhMhs({ nama, umur, namaProdi, email, nilai: { tugas, uts, uas } }) {
    return `hallo nama saya ${nama}, umur saya ${umur}, berasal dari Prodi ${namaProdi},nilai Tugas saya ${tugas}, Uts ${uts}, dan Uas saya ${uas} ,telah dikiirm di melalui email ${email}`;
}
console.log(cetakhMhs(mhs1));
