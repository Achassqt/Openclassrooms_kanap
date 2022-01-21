let productInCart = JSON.parse(localStorage.getItem("produit"));
console.table(productInCart);

if(productInCart === null) {
    document.getElementById("cart__items").innerHTML = "Votre panier est vide";
} else {
    for(let produit in productInCart) {

        let productArticle = document.createElement("article");
        document.getElementById("cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute("data-id", productInCart[produit].productId);
        productArticle.setAttribute("data-color", productInCart[produit].productColor);

        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";

        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = productInCart[produit].productImgSrc;
        productImg.alt = productInCart[produit].productImgAlt;

        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";

        let productItemContentDescription = document.createElement("div");
        productItemContent.appendChild(productItemContentDescription);
        productItemContentDescription.className = "cart__item__content__description";

        let productH2 = document.createElement("h2");
        productItemContentDescription.appendChild(productH2);
        productItemContentDescription.innerHTML = productInCart[produit].productName;

        let productColor = document.createElement("p");
        productItemContentDescription.appendChild(productColor);
        productColor.innerHTML = productInCart[produit].productColor;

        let productPrice = document.createElement("p");
        productItemContentDescription.appendChild(productPrice);
        productPrice.innerHTML = productInCart[produit].productPrice + "€";

        let productItemContentSettings = document.createElement("div");
        productItemContent.appendChild(productItemContentSettings);
        productItemContentSettings.className = "cart__item__content__settings";

        let productDivQuantity = document.createElement("div");
        productItemContentSettings.appendChild(productDivQuantity);
        productDivQuantity.className = "cart__item__content__settings__quantity";

        let productQte = document.createElement("p");
        productDivQuantity.appendChild(productQte);
        productQte.innerHTML = "Qté : ";

        let productQuantity = document.createElement("input");
        productDivQuantity.appendChild(productQuantity);
        productQuantity.className = "itemQuantity";
        productQuantity.value = productInCart[produit].productQuantity;
        productQuantity.type = "number";
        productQuantity.name = "itemQuantity";
        productQuantity.min = "1";
        productQuantity.max = "100";

        let productDivDelete = document.createElement("div");
        productItemContentSettings.appendChild(productDivDelete);
        productDivDelete.className = "cart__item__content__settings__delete";

        let productDelete = document.createElement("p");
        productDivDelete.appendChild(productDelete);
        productDelete.className = "deleteItem";
        productDelete.innerHTML = "Supprimer";

    }
}