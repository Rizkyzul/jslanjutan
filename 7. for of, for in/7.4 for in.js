//  ini hanya enumerable atau property pada objek
const mhs = {
    nama: "rizky",
    kelas: "KIP C2",
    umur: 23,
};

for (m in mhs) {
    console.log(mhs[m]);
}

// jika m saja hanya index
//  mhs[m] isinya value
