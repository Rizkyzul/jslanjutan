//  merepresentasikan argument pada function dengan juimlah yang tdk terbatas menjadi sebuah array

// rest harus diakhir dari formal parameter
function myfunc(a, b, ...myarrs) {
    return ` a = ${a}, b=${b} myarrs = ${myarrs}`;
}
console.log(myfunc(1, 2, 3, 4, 5, 6));

// contoh lain
function jumlahkan(...angka) {
    let total = 0;
    for (const a of angka) {
        total += a;
    }
    return total;

    // atau pakai reduce
    //  return angka.reduce((a,b) => a * b) ;
}
console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ["agus", "agus", "rija", "faqih", "agis"];
const [ketua, waketu, ...anggota] = kelompok1;
console.log(anggota);

// object des
const team = {
    pm: " kiki",
    fe1: "rija",
    fe2: "agus",
    be: "bagas",
    uiux: " apan",
    devOps: " rija",
};

const { pm, ...myteam } = team;
console.log(myteam);

// filter
function filterBy(type, ...values) {
    return values.filter((v) => typeof v === type);
}

console.log(filterBy("boolean", 3, "kiki", 4, false, 5, 10, true, "gike"));
