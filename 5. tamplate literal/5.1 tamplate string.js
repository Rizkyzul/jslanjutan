/*
menggunakan back tick
bisa nulis string biasa
bisa melakukan multi line string
bisa melakukan embedded expression {$}
bisa menuliskan taged tamplate
*/

// multiline string
console.log("string1 \n tring 2"); //ini yang biasa
console.log(`string1 (enter)
string2`); // ini multi, hasilnya sama 2 string di 2 baris

//html fragments(multiline)

const nama = "rizky";
const umur = 20;
console.log(`hallo, nama saya ${nama}, umur saya ${umur}`);

// //embeddded expression
console.log(`${7 * 8}`);
console.log(` ${alert("hello dunia")}`);

const x = 30;
console.log(`${x % 2 == 0 ? "genap " : "ganjil"}`);

// html fragment
const mhs = {
    nama: "riKy",
    umur: 12,
    nim: 12233,
    email: "juju@GainNode.com",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="Nim">${mhs.nim}</span>
</div>`;

console.log(el);
