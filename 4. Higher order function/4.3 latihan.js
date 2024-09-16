// ambil semua elemen vidio
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya js lanjutan
let jsLanjut = videos
    .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

    // ambil durasi masing-masing vidio
    .map((item) => item.dataset.duration)
    // ubah durasi menjadi integer rubah menit menjadi detik
    .map((waktu) => {
        const parts = waktu.split(":").map((part) => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })
    // jumlah semua detiknya
    .reduce((total, detik) => total + detik);

// ubah format detik ke jam menit detik
const jam = Math.floor(jsLanjut / 3600); //jam
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60); // menit
const detik = jsLanjut - menit * 60; // detik

// simpan pada dom
const pDurasi = document.querySelector(".Jumlah-durasi");
pDurasi.textContent = `${jam} Jam ,${menit} Menit, ${detik} Detik`;

const jmlVid = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const jmlhVideo = document.querySelector(".Jumlah-vidio");
jmlhVideo.textContent = `${jmlVid} video`;
