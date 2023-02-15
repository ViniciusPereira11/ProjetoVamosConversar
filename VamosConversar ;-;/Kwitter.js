function addUser(){
var usuario = document.getElementById("nUsuario").value;
localStorage.setItem("nUsuario", usuario);
window.location="Kwitter_room.html";}