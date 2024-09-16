// const mhs = {
//     nama: "rizky",
//     umur: 12,
//     nim: 12233,
//     email: "juju@GainNode.com",
// };
// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="Nim">${mhs.nim}</span>
// </div>`;

// looping
// const mhs = [
//     {
//         nama: "kiki",
//         email: "kuxk@gmail.com",
//     },
//     {
//         nama: "koko",
//         email: "kk@gmail.com",
//     },
//     {
//         nama: "hiho",
//         email: "hiho@com",
//     },
//     {
//         nama: "kika",
//         email: "kika@com",
//     },
//     {
//         nama: "kokow",
//         email: "anjay@fv",
//     },
//     {
//         nama: "ajoaoj",
//         email: "tejo.fc@com",
//     },
// ];

// looping
// const el = `<div class="mhs">
// ${mhs
//     .map(
//         (m) => `<ul>
//   <li>${m.nama}</li>
//   <li>${m.email}</li>
// </ul>`
//     )
//     .join("")}
// </div>`;

// conditionals
// const lagu = {
//     judul: " belahan jiwa",
//     penyayi: "isyana",
//     feat: "syekoji",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyayi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// nasted (HTML FRAGMENTS BESARANG)
const mhs = {
    nama: "panjul",
    semester: 6,
    matakuliah: ["rpl", "ti akut", "analisa web", "instruktur website"],
};
function cetakMataKuliah(matakuliah) {
    return `
  <ol>
  ${matakuliah.map((mk) => `<li> ${mk}</li>`).join("")}
  </ol>
  `;
}

const el = `<div class="mhs">
<h2> ${mhs.nama} </h2>
<span class="semester">Semester: ${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;
