const firebaseConfig = {
  apiKey: "AIzaSyD-GxWJxYciaM8XdrEgSubEaK_qNe8Z2bk",
  authDomain: "banco-de-dados-database.firebaseapp.com",
  databaseURL: "https://banco-de-dados-database-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados-database",
  storageBucket: "banco-de-dados-database.appspot.com",
  messagingSenderId: "97828710716",
  appId: "1:97828710716:web:1604dcd1c7a51046d45639",
  measurementId: "G-FDGY8V42QV"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function carregar(){
  var nome =  localStorage.getItem("nUsuario");
  document.getElementById("nome").innerHTML = nome;
}
var NomeDeSala = console.log;
function addRoom(){
   NomeDeSala = document.getElementById("ipSala").value;
   database.ref("/").child(NomeDeSala).set({
   NomeDeSala:  "adiciona a sala"
   });
}
function getData(){
  firebase.database().ref("/").on('value', 
  function(snapshot){
    document.getElementById("output").innerHTML = "";
    childKey = "";
    snapshot.forEach(function (childSnapshot){
      roomNames = childSnapshot.key;
    
      
      line = "<div id="+roomNames+" onclick='redirectToRoomName(this.id)' >"+roomNames+"</div><hr>";
      childKey +=line;
    });
    document.getElementById("output").innerHTML = childKey;
  });
}
getData();
function redirectToRoomName(roomNames) {
  localStorage.setItem("NomeDeSala", roomNames);
  window.location = 'Kwitter_page.html';
}
function logout(){
  localStorage.removeItem("nUsuario");
  window.location = 'index.html';
}