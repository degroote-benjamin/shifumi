var compteur = 0;
var compteura = 0;
var c = document.getElementById("hid")
var d = document.getElementById("none")
var img = document.querySelectorAll(".img");
var tab = ["pierre", "feuille", "ciseaux"]
var final = document.getElementById("final")
var name = document.getElementById("input").value;

// function for choose pseudo and hide the start button


function start(){
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

document.querySelector("#resultata").innerHTML = '<img src="img/' + a+ '.png" alt="" class="img1">'


// img bot

   document.querySelector("#resultatb").innerHTML = '<img src="img/' + random+ '.png" alt="" class="img1">'



// write in html
          document.querySelector("#compta").innerHTML = compteura
          document.querySelector("#compt").innerHTML = compteur


// Final
          if(compteur === 3){
           d.style.display = "none"
          final.style.display = "flex"
          document.getElementById("h2").innerHTML= "Victoire"
          }
          else if(compteura === 3){
            d.style.display = "none"
            final.style.display = "flex"
          document.getElementById("h2").innerHTML= "DEFAITE"
          }

    })
}
