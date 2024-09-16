// bentuk lebih komplek dari template literals (membaca template literals melalui function)

// const nama = "rizky";
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = "";
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || " "}`;
//     // });
//     // return result;

//     // simplenya
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || " "}`, "");
// }

// const str = coba`hallo nama saya ${nama}, umur saya ${umur} tahun`;
// console.log(str);

// higlight
const nama = "rizky";
const umur = 20;
const email = "kikiku@gmail.com";

function higlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || " "}</span>`, "");
}

const str = higlight`hallo nama saya ${nama}, umur saya ${umur} tahun, serta email untuk menghubungin saya dalah ${email}`;
console.log(str);

document.body.innerHTML = str;
