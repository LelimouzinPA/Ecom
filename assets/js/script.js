//Appel du JSON selon les catégories
let uri = "categorie1.json"
foodBtn.addEventListener("click", function() {
    uri = "categorie1.json"
    searchMovie()
})
hygienBtn.addEventListener("click", function() {
    uri = "categorie2.json"
    searchMovie()
})
catgameBtn.addEventListener("click", function() {
    uri = "categorie3.json"
    searchMovie()
})
MaterielCat.addEventListener("click", function() {
    uri = "categorie4.json"
    searchMovie()
})
//Fonction Json
const searchMovie = () => {
    fetch("http://127.0.0.1:5500/assets/json/" + uri)
        .then(fetchResponse => fetchResponse.json())
        .then(jsonContent => {
            clearMovie()
            jsonContent.results.map((article, index) => {
                //Création de la div principale
                let coldiv = document.createElement("div")
                coldiv.className = "col-12 col-sm-6 col-lg-3 p-2 d-flex"
                //Création de la div card + ombres
                let classdiv = document.createElement("div")
                classdiv.className = "card shadow"
                //Création de la div contenant les images des cards
                let imgdiv = document.createElement("img")
                imgdiv.className = " img-flex imageSize"
                imgdiv.src = article.image
                //Création de la div conteant le body des cards
                let carddiv = document.createElement("div")
                carddiv.className = "card-body "
                //Création de la div conteant le titre des cards
                let cardtitle = document.createElement("h3")
                cardtitle.className = "card-title"
                cardtitle.innerText = article.product_name
                //Div texte principae des cards
                let cardptitle = document.createElement("p")
                cardptitle.className = "card-text "
                cardptitle.innerText = (article.description != "") ? article.description.substring(0, 200) + " ..." : null
                //Overlay masque au-dessus de la card
                let pricepdiv = document.createElement("p")
                pricepdiv.innerText = article.price
                pricepdiv.className = "badge bg-success text-wrap col-6"
                //Div row des boutons
                let innerCardRow = document.createElement("div")
                innerCardRow.className = "row mt-3 justify-content-center pb-3"
                //Création du bouton moins
                let minusButton = document.createElement("a")
                minusButton.setAttribute("href", "#")
                minusButton.setAttribute("onclick", "numberOfProducts()")
                minusButton.className = "col-2 btn btn-danger"
                minusButton.innerText = "-"
                minusButton.id = "minus" + article.id
                innerCardRow.appendChild(minusButton)
                //Création de l'input du nombre de produits
                let productsInput = document.createElement("input")
                productsInput.setAttribute("type", "text")
                productsInput.className = "col-4"
                productsInput.value = 0
                innerCardRow.appendChild(productsInput)
                //Création du bouton plus
                let plusButton = document.createElement("a")
                plusButton.setAttribute("href", "#")
                plusButton.className = "col-2 btn btn-success"
                plusButton.innerText = "+"
                innerCardRow.appendChild(plusButton)
                plusButton.id = "plus" + article.id
                //Création du bouton valider
                let confirmButton = document.createElement("a")
                confirmButton.setAttribute("href", "#")
                confirmButton.setAttribute("onclick", "")
                confirmButton.className = "col-8 btn btn-primary mt-3"
                confirmButton.innerText = "Valider"
                innerCardRow.appendChild(confirmButton)
                confirmButton.id = "confirm" + article.id
                //Accrochage des divs
                carddiv.append(cardtitle, cardptitle, )
                classdiv.append(imgdiv, carddiv, pricepdiv, innerCardRow)
                coldiv.append(classdiv)
                articleContent.append(coldiv)
            })
            })
        }
        //Suppression du contenu précédent
    const clearMovie = () => {
        articleContent.innerText = ""
    }
searchMovie()
