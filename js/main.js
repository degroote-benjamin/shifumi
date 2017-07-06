var compteur = 0;
var compteura = 0;
var buttons = document.querySelectorAll("a");
var tab = ["pierre", "feuille", "ciseaux"]

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var a = tab[i];
        var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        var resultat;

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
            alert("joueur" + " " + compteura + " point")
          } else if (a == "ciseaux" && random == "pierre" || a == "pierre" && random == "feuille" || a == "feuille" && random == "ciseaux") {
            compteur++
            alert("ordi" + " " + compteur + " point")
          } else if (a == random) {
            alert("égalité")
          }
                  document.querySelector("#resultat").innerHTML = a + " " + random
    })
}





//
// if (compteura == 3) {
//   alert("VOUS AVEZ GAGNER " + compteura + " a " + compteur)
// } else if (compteur == 3) {
//   alert("HAHA TA PERDU " + compteur + " a " + compteura)
// }
