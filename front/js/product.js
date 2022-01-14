let str = window.location.href;
let url = new URL(str);
let productId = url.searchParams.get("id");
console.log(productId);

getArticle()

// Récupérer les données de l'API

function getArticle() {
    fetch("http://localhost:3000/api/products/" + productId)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }        
    })

    .catch(function(err) {
        console.log("Erreur :/")
    })

// Insertion de chaque élément dans la page produit 

.then(function(resultAPI) {
    const article = resultAPI;
    console.table(article);

    let productImg = document.createElement("img");
    document
    .querySelector(".item__img")
    .appendChild(productImg);
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;

    let productName = document.getElementById("title");
    productName.innerHTML = article.name;

    let productPrice = document.getElementById("price");
    productPrice.innerHTML = article.price;

    let productDescription = document.getElementById("description");
    productDescription.innerHTML = article.description;

    for (let colors of article.colors){
        console.table(colors);
        let productColors = document.createElement("option");
        document
        .getElementById("colors")
        .appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }
})
}
