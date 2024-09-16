// // di representasikan dengan ... (titik tiga)
// spread adalah sebuah operator yang memecah interebels atau banyak isinya menjadi singel elemet

// const mhs = ["kiki", " dodi", " dika"];
// const dosen = ["agus", "kijang", " koke"];

// const orang = [...mhs, ...dosen];
// //atau dengan concat
// const orang1 = mhs.concat(dosen);
// // hasilkan akan sama namun tidak se flexibel spread
// console.log(orang);
// console.log(orang1);

// // mengcopy array
// // mhs2 tidak akan mewrubah array mhs1 walau mhs2 ada perubahan
// const mhs1 = ["kiki", " dodi", " dika"];
// const mhs2 = [...mhs1];
// mhs2[0] = "tiruk";
// console.log(mhs2);

// const liMhs = document.querySelectorAll("li");
// const mhs3 = [...liMhs].map((m) => m.textContent);
// console.log(mhs3);

const nama = document.querySelector(".nama");
const alfabet = [...nama.textContent].map((h) => `<span> ${h} </span>`).join("");
nama.innerHTML = alfabet;
