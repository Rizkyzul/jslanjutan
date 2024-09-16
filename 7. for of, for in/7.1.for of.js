// looping yg dapat menelusuri objek intereble
// string, array, arguments/nodelist,typedarray, map,set, user-defined interables

// for of array
const mhs = ["agus", "sofyan", "miftah"];

// pakai for
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
}

// pakai forEach
// ini khusus array
mhs.forEach((a) => console.log(a));

// pakai for of
for (const m of mhs) {
    console.log(m);
}

// looping string
const nama = "zulkarnaen";
for (const n of nama) {
    console.log(n);
}

// foreach
mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
});

// for of angka baru nama
// foreach nama baru angka

// for of
for (const [n, o] of mhs.entries()) {
    console.log(`${o} adalah mahasiswa ke ${n + 1}`);
}
