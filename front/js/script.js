getArticles();

// Récupérer les données de l'API

async function getArticles() {
    await fetch("http://localhost:3000/api/products")
    
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    
    .catch(function(err) {
        document
        .getElementById('items')
        .innerHTML = "Aucune réponse de l'API";
    })

// Insertion de chaque élément dans la page d'acceuil

    .then(function(resultAPI) {
        const articles = resultAPI;
        console.table(articles);
        for(let article in articles) {

            let productLink = document.createElement("a");
            document
            .getElementById("items")
            .appendChild(productLink);
            productLink.href = `product.html?id=${resultAPI[article]._id}`;

            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultAPI[article].imageUrl;
            productImg.alt = resultAPI[article].altTxt;

            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultAPI[article].name;

            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productDescription");
            productDescription.innerHTML = resultAPI[article].description;

        }
    })
}



