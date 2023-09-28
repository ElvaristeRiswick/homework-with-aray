listeItem = [];

function addittioner() {
  let Item = document.getElementById("item").value;
  listeItem.push(Item);
  imprimer();
  netoyer();
}

function netoyer() {
  document.getElementById("item").value = "";
}

function imprimer() {
  document.getElementById("liste").innerText = listeItem.join("/");
}
