// Récupération de l'id du produit avec l'utilisation de URLSearchParams

let str = window.location.href;
let url = new URL(str);
let productId = url.searchParams.get("id");
console.log(productId);

getArticle()

// Récupérer les données de l'API
// Utilisation de la méthode GET pour récupérer les informations d'un produit

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

// Boucle for... of pour récupérer et afficher les différentes couleurs d'un produit 

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


// Panier - localStorage

const addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", function() {

// On récupère les différentes valeurs du produits

    let productColor = document.getElementById("colors").value;
    let productQuantity = document.getElementById("quantity").value;
    let productImgSrc = document.querySelector(".item__img > img").src;
    let productImgAlt = document.querySelector(".item__img > img").alt;
    let productName = document.querySelector("#title").innerHTML;
    let productPrice = document.getElementById("price").innerHTML;


// On indique comment bien sélectionner les valeurs Color et Quantity

    if(productColor == '') {
        alert("Sélectionnez une couleur");
    } else if(productQuantity == 0 || productQuantity > 100) {
        alert("Sélectionnez une quantitée (entre 1 et 100)");

    } else {    

// Objet pour stocker toutes les informations du produit         

        let optionsProduit = {
            productId,
            productColor,
            productQuantity,
            productImgSrc,
            productImgAlt,
            productName,
            productPrice,
        };

// Création de la variable du localStorage

        let productInCart = JSON.parse(localStorage.getItem("produit"));

// fonction fenêtre popup pour indiquer que le produit est ajouté au panier

        const popupConfirmation = () => {
            if(window.confirm(`Votre commande a bien été ajouté au panier
            Pour consulter votre panier, cliquez sur OK`)) {
                window.location.href = "cart.html";
            }
        }

// Si le localStorage est vide, on crée un tableau et on push "optionsProduit" pour stocker les infos du produit

        if(productInCart === null) {
            productInCart = []
            productInCart.push(optionsProduit);
            localStorage.setItem("produit", JSON.stringify(productInCart));
            popupConfirmation();

// Si le localStorage a déjà un produit, on crée un nouveau tableau ...

        } else {
            productInCart.push(optionsProduit);
            localStorage.setItem("produit", JSON.stringify(productInCart));
            popupConfirmation();
        }
        
    } 

})
