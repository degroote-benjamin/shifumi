var compteur = 0;
var compteura = 0;

while (compteur !== 3 && compteura !== 3 && a !== "stop") {
  var random = Math.random() * 3;
  var a = prompt("pierre feuille ou ciseaux")
  a = a.toLowerCase()
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
  } else if (a == "stop") {
    alert("tarlouze")
  } else if (a == "") {
    alert("c'est vide")
  } else {
    alert("Arrete ta merde")
  }
}


if (compteura == 3) {
  alert("VOUS AVEZ GAGNER " + compteura + " a " + compteur)
} else if (compteur == 3) {
  alert("HAHA TA PERDU " + compteur + " a " + compteura)
}
