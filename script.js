const btnCalculer = document.getElementById("calculerbtn");
const resultat = document.getElementById("resultat");

btnCalculer.addEventListener("click", function () {
  const entier1 = parseInt(document.getElementById("ent1").value);
  const entier2 = parseInt(document.getElementById("ent2").value);

  if (!isNaN(entier1) && !isNaN(entier2)) {
    const somme = entier1 + entier2;
    resultat.textContent = `La somme est = ${somme}`;
  } else {
    resultat.textContent = "Veuillez saisir deux entiers positifs valides.";
  }
});
