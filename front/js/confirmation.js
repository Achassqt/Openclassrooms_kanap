let url = new URL(document.location);
let id = url.searchParams.get("id");

document.getElementById("orderId").innerHTML = id;