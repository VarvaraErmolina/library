const search = document.getElementById("q");
const elementSend = document.getElementById("btn_submit");
elementSend.addEventListener('click', send)
function send() {
search.value += document.getElementById("fio").value + ' ';
search.value += document.getElementById("email").value + ' ';
search.value += String(document.getElementById("telefon").value) + ' ';
document.getElementById("UserEnter").submit();
}