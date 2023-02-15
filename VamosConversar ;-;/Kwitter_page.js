const firebaseConfig = {
    apiKey: "AIzaSyD-GxWJxYciaM8XdrEgSubEaK_qNe8Z2bk",
    authDomain: "banco-de-dados-database.firebaseapp.com",
    databaseURL: "https://banco-de-dados-database-default-rtdb.firebaseio.com",
    projectId: "banco-de-dados-database",
    storageBucket: "banco-de-dados-database.appspot.com",
    messagingSenderId: "97828710716",
    appId: "1:97828710716:web:1604dcd1c7a51046d45639",
    measurementId: "G-FDGY8V42QV"
  }

  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  
  var nomeSala = localStorage.getItem("NomeDeSala");
  var nome = localStorage.getItem("nUsuario");

  function enviar(){
    var msg = document.getElementById("msg").value;
    db.ref(nomeSala).push({
        msg:msg,
        like:0,
        nome:nome
    })
    document.getElementById("msg").value = '';
  }

  db.ref(nomeSala).on("value",  (data)=>{
    document.getElementById("output").innerHTML = '';

    data.forEach((dados)=>{
        if(dados.key != 'NomeDeSala'){
        var id = dados.key;
        var valores = dados.val();

        var mensagem = valores['msg'];
        var nome = valores['nome'];
        var likes = valores['like'];

        var msghtml = "<h4>"+ mensagem +"</h4>";
        var nomehtml = "<h4>"+nome+"</h4>";

        var botaoLike = "<button class='btn btn-warning' id="+id+" value="+likes+" onclick='attLike(this.id)'>";
        var likeshtml = "<span class='glyphicon glyphicon-thumbs-up'></span>Likes:"+likes+"</button>";
        linha = msghtml + nomehtml + botaoLike + likeshtml;
        document.getElementById("output").innerHTML += linha
        }
    })
  })

  function attLike(id){
    likes = document.getElementById(id).value; 
    likes = Number(likes) + 1;
    db.ref(nomeSala).child(id).update({
        like:likes
    })
  }

  function LogOut()
  {
    localStorage.removeItem("nUsuario");
    window.location = 'index.html';
  }