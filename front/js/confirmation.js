// Récupération de l'id de la commande avec URLSearchParams

let url = new URL(document.location);
let id = url.searchParams.get("id");

document.getElementById("orderId").innerHTML = id;