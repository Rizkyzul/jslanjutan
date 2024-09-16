const liNama = document.querySelectorAll(".nama");

//isinya nodelist
console.log(liNama);

//pakai foreach
liNama.forEach((n) => console.log(n.textContent));

// lebih tepat menggunakan for of
for (n of liNama) {
    console.log(n.innerHTML);
}
