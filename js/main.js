var compteur = 0;
var compteura = 0;
var img = document.querySelectorAll(".img");
var tab = ["pierre", "feuille", "ciseaux"]

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        var a = tab[i];

          var random = Math.random() * 3;
          if (random >= 0 && random <= 1) {
            random = "feuille"
          } else if (random > 1 && random <= 2) {
            random = "pierre"
          } else {
            random = "ciseaux"
          }

          if (a == "pierre" && random == "ciseaux" || a == "feuille" && random == "pierre" || a == "ciseaux" && random == "feuille") {
            compteura++
            document.querySelector("#resultat").innerHTML = "Vous avez win"
          } else if (a == "ciseaux" && random == "pierre" || a == "pierre" && random == "feuille" || a == "feuille" && random == "ciseaux") {
            compteur++
            document.querySelector("#resultat").innerHTML = "Vous avez loose"
          } else if (a == random) {
            document.querySelector("#resultat").innerHTML = "egalité"
          }
          document.querySelector("#compta").innerHTML = compteura
          document.querySelector("#compt").innerHTML = compteur
          document.querySelector("#resultata").innerHTML = a
          document.querySelector("#resultatb").innerHTML = random

    })
}
