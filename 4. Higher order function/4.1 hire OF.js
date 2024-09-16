// fun yang beroprasi pada fun lainnya

// function yang memiliki callback (kerjakan tugas) = higher order function
// function sebagai argumen(selesai) = Callback
function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
    selesai();
}
function selesai() {
    alert(`Selamat Anda suda mengerjakan tugas ini`);
    confirm("Ingin Mengerjakan tugas lainnya?");
}
