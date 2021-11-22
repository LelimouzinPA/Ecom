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
                    const minusButton = document.createElement("a")
                    minusButton.className = "col-2 btn btn-danger"
                    minusButton.innerText = "-"
                    minusButton.id = "minus" + article.id
                    innerCardRow.appendChild(minusButton)
                        //Fonction diminution quantité au clic
                    minusButton.addEventListener("click", removeProduct = () => {
                            if (productsInput.value > 0) {
                                productsInput.value--
                            } else {
                                productsInput.value == 0
                            }
                        })
                        //Création de l'input du nombre de produits
                    var productsInput = document.createElement("input")
                    productsInput.setAttribute("type", "text")
                    productsInput.className = "col-4"
                    productsInput.value = 0
                    productsInput.id = "input" + article.id
                    innerCardRow.appendChild(productsInput)
                        //Création du bouton plus
                    const plusButton = document.createElement("a")
                    plusButton.className = "col-2 btn btn-success"
                    plusButton.innerText = "+"
                    plusButton.id = "plus" + article.id
                    innerCardRow.appendChild(plusButton)
                        //Fonction ajout quantité au clic
                    plusButton.addEventListener("click", addProduct = () => {
                            productsInput.value++
                        })
                        //Création du bouton valider
                    const confirmButton = document.createElement("a")
                    confirmButton.className = "col-8 btn btn-primary mt-3"
                    confirmButton.innerText = "Valider"
                    confirmButton.id = "confirm" + article.id
                    innerCardRow.appendChild(confirmButton)
                    confirmButton.addEventListener("click", cartProduct = () => {
                            //Div première col
                            let productModalDiv1 = document.createElement("div")
                            productModalDiv1.className = "col-3"
                                // accroche a row cart
                            rowCart.appendChild(productModalDiv1)
                                // creation de img 
                            let productImage = document.createElement("img")
                            productImage.src = article.image
                            productImage.className = "col-3"
                            productModalDiv1.appendChild(productImage)
                                // creation de la seconde div col 3
                            let productModalDiv2 = document.createElement("div")
                            productModalDiv2.className = "col-4"
                            rowCart.appendChild(productModalDiv2)
                                // creation du paragraphe titre
                            let pProductTitle = document.createElement("p")
                            pProductTitle.innerText = article.product_name
                            productModalDiv2.appendChild(pProductTitle)
                                //let clonedProduct = coldiv.cloneNode(true)
                                //rowCart.append(clonedProduct)
                            let innerDivModal = document.createElement("div")
                            innerDivModal.className = "col-2"
                            let innerCardRowModal = document.createElement("div")
                            innerCardRowModal.className = "  mt-3 justify-content-center pb-3"
                                //Création du bouton moins
                            const minusButtonModal = document.createElement("a")
                            minusButtonModal.className = "col-1 btn btn-danger"
                            minusButtonModal.innerText = "-"
                            minusButtonModal.id = "minusModal" + article.id
                            innerDivModal.appendChild(minusButtonModal)
                                //Fonction diminution quantité au clic
                            minusButtonModal.addEventListener("click", removeProductModal = () => {
                                    if (productsInputModal.value > 0) {
                                        productsInputModal.value--
                                    } else {
                                        productsInputModal.value == 0
                                    }
                                })
                                //Création de l'input du nombre de produits
                            var productsInputModal = document.createElement("input")
                            productsInputModal.setAttribute("type", "text")
                            productsInputModal.className = "col-2"
                            productsInputModal.value = 0
                            productsInputModal.id = "inputModal" + article.id
                            innerDivModal.appendChild(productsInputModal)
                                //Création du bouton plus
                            const plusButtonModal = document.createElement("a")
                            plusButtonModal.className = "col-1 btn btn-success"
                            plusButtonModal.innerText = "+"
                            plusButtonModal.id = "plusModal" + article.id
                            innerDivModal.appendChild(plusButtonModal)
                                //Fonction ajout quantité au clic
                            plusButtonModal.addEventListener("click", addProductModal = () => {
                                productsInputModal.value++
                            })
                            rowCart.appendChild(innerDivModal)
                            let valDivModal = document.createElement("div")
                            valDivModal.className = "col-2"
                                //Création du bouton valider
                            const confirmButtonModal = document.createElement("a")
                            confirmButtonModal.className = "btn btn-primary mt-3"
                            confirmButtonModal.innerText = "Valider"
                            confirmButtonModal.id = "confirm" + article.id
                            valDivModal.appendChild(confirmButtonModal)
                            rowCart.append(valDivModal)
                        })
                        //Accrochage des divs
                    carddiv.append(cardtitle, cardptitle)
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
    //fonction valeur de l'input pour afficher 
    //div quantité 
    //div prix
    //boutton + input - supprimer
    //montant total addition tarif prix total + bouton acheter 
    //bonus panier jolie