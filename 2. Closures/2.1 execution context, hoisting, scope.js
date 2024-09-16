/* fase Execution content 
1.creation
2.Execution
*/
let nama = "agung";
console.log(`woy ${nama}`);

/**
 yang ada di creation phase dan ex adalah
 1.windows
 2.arguments
 3.hoisting
 */
// execution phase

let nama1 = "rizky";
let umur = 20;

function sayhello() {
    return `hallo ${nama1}, umur kamu sekarang sudah ${umur} loh!`;
}
console.log(sayhello());

let username = "@kikiku";
function cetakUrl(username) {
    let url = "https://instagram.com/";

    return url + username;
}
console.log(cetakUrl(username));
