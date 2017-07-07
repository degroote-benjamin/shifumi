var compteur = 0;
var compteura = 0;
var img = document.querySelectorAll(".img");
var tab = ["pierre", "feuille", "ciseaux"]

var name = document.getElementById("input").value;
function start(){
  var c = document.getElementById("hid")
  var d = document.getElementById("none")
  c.style.display = "none"
  d.style.display = "block"
  document.querySelector("#user").innerHTML= name + " :"
}


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        var a = tab[i];
// random
          var random = Math.random() * 3;
          if (random >= 0 && random <= 1) {
            random = "feuille"
          } else if (random > 1 && random <= 2) {
            random = "pierre"
          } else {
            random = "ciseaux"
          }


//comparaison
          if (a == "pierre" && random == "ciseaux" || a == "feuille" && random == "pierre" || a == "ciseaux" && random == "feuille") {
            compteura++
            document.querySelector("#resultat").innerHTML = "win"
          } else if (a == "ciseaux" && random == "pierre" || a == "pierre" && random == "feuille" || a == "feuille" && random == "ciseaux") {
            compteur++
            document.querySelector("#resultat").innerHTML = "loose"
          } else if (a == random) {
            document.querySelector("#resultat").innerHTML = "égalité"
          }


// select img

// img user

if(a == "pierre"){
   document.querySelector("#resultata").innerHTML = '<img src="img/pierre.png" alt="" class="img1">'
}
else if (a=="feuille"){
   document.querySelector("#resultata").innerHTML = '<img src="img/papier.png" alt="" class="img1">'
}
else {
   document.querySelector("#resultata").innerHTML = '<img src="img/ciseaux.png" alt="" class="img1">'
}


// img bot

if(random == "pierre"){
   document.querySelector("#resultatb").innerHTML = '<img src="img/pierre.png" alt="" class="img1">'
}
else if (random =="feuille"){
   document.querySelector("#resultatb").innerHTML = '<img src="img/papier.png" alt="" class="img1">'
}
else {
   document.querySelector("#resultatb").innerHTML = '<img src="img/ciseaux.png" alt="" class="img1">'
}


// write in html
          document.querySelector("#compta").innerHTML = compteura
          document.querySelector("#compt").innerHTML = compteur



    })
}
