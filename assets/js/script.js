//Appel du JSON selon les catégories
let uri = "categorie1.json"
categoryTitle.innerText = "Nourriture"
foodBtn.addEventListener("click", function() {
    uri = "categorie1.json"
    searchCategory()
    categoryTitle.innerText = "Nourriture"
})
hygienBtn.addEventListener("click", function() {
    uri = "categorie2.json"
    searchCategory()
    categoryTitle.innerText = "Produits d'hygiéne"
})
catgameBtn.addEventListener("click", function() {
    uri = "categorie3.json"
    searchCategory()
    categoryTitle.innerText = "Jouets"
})
MaterielCat.addEventListener("click", function() {
        uri = "categorie4.json"
        searchCategory()
        categoryTitle.innerText = "Matériel"
    })
    //Fonction Json
const searchCategory = () => {
        fetch("http://127.0.0.1:5500/assets/json/" + uri)
            .then(fetchResponse => fetchResponse.json())
            .then(jsonContent => {
                clearCategory()
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
                    pricepdiv.innerText = article.price + " €"
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
                    let totalPriceNumber = 0
                    confirmButton.addEventListener("click", cartProduct = () => {
                        //Création du rowCart
                        let rowCart = document.createElement("div")
                        rowCart.className = "row"
                        containerModal.appendChild(rowCart)
                            //Div première col
                            let productModalDiv1 = document.createElement("div")
                            productModalDiv1.className = "col-3"
                                // accroche a row cart
                            rowCart.appendChild(productModalDiv1)
                                // creation de img 
                            let productImage = document.createElement("img")
                            productImage.src = article.image
                            productImage.className = "col-3 img-fluid"
                            productModalDiv1.appendChild(productImage)
                                // creation de la seconde div col 3
                            let productModalDiv2 = document.createElement("div")
                            productModalDiv2.className = "col-2"
                            rowCart.appendChild(productModalDiv2)
                                // creation du paragraphe titre
                            let pProductTitle = document.createElement("p")
                            pProductTitle.innerText = article.product_name
                            productModalDiv2.appendChild(pProductTitle)
                            //Création de la div tarif
                            let cartPriceDiv = document.createElement("div")
                            cartPriceDiv.className = "col-2"
                            rowCart.appendChild(cartPriceDiv)
                                //Création de l'input du nombre de produits
                            let innerDivModal = document.createElement("div")
                            innerDivModal.className = "col-2"
                            let innerCardRowModal = document.createElement("div")
                            innerCardRowModal.className = "justify-content-center"
                                //Création du bouton moins
                            const minusButtonModal = document.createElement("a")
                            minusButtonModal.className = "col-4 btn btn-danger"
                            minusButtonModal.innerText = "-"
                            minusButtonModal.id = "minusModal" + article.id
                            innerDivModal.appendChild(minusButtonModal)
                                //Fonction diminution quantité au clic
                            minusButtonModal.addEventListener("click", removeProductModal = () => {
                                    if (productsInputModal.value > 0) {
                                    productsInputModal.value--
                                    articlePrice = article.price
                                    result = articlePrice * productsInputModal.value
                                    paraPrice.innerText = result.toFixed(2)
                                    totalPriceNumber = totalPriceNumber - article.price
                                    modalTotalPrice.innerText = "Montant total : " + totalPriceNumber.toFixed(2) + " €"
                                    } else {
                                        productsInputModal.value == 0
                                    }
                                })
                                //Partie du code dans le modal
                            var productsInputModal = document.createElement("input")
                            productsInputModal.setAttribute("type", "text")
                            productsInputModal.className = "col-4"
                            productsInputModal.value = productsInput.value
                            productsInputModal.id = "inputModal" + article.id
                            innerDivModal.appendChild(productsInputModal)
                            //Création prix
                            var paraPrice = document.createElement("p")
                            //Calcul du prix
                            articlePrice = article.price
                            result = articlePrice * productsInput.value
                            paraPrice.innerText = result.toFixed(2) + " €"
                            cartPriceDiv.appendChild(paraPrice)
                                //Création du bouton plus
                            const plusButtonModal = document.createElement("a")
                            plusButtonModal.className = "col-4 btn btn-success"
                            plusButtonModal.innerText = "+"
                            plusButtonModal.id = "plusModal" + article.id
                            innerDivModal.appendChild(plusButtonModal)
                                //Fonction ajout quantité au clic
                            plusButtonModal.addEventListener("click", addProductModal = () => {
                                productsInputModal.value++
                                articlePrice = article.price
                                result = articlePrice * productsInputModal.value
                                paraPrice.innerText = result.toFixed(2)
                                totalPriceNumber = totalPriceNumber + article.price
                                modalTotalPrice.innerText = "Montant total : " + totalPriceNumber.toFixed(2) + " €"
                            })
                            rowCart.appendChild(innerDivModal)
                            let valDivModal = document.createElement("div")
                            valDivModal.className = "col-2"
                                //Création du bouton valider
                            const deleteButtonModal = document.createElement("a")
                            deleteButtonModal.className = "btn btn-warning"
                            deleteButtonModal.innerText = "Supprimer"
                            deleteButtonModal.id = "deleteModal" + article.id
                            deleteButtonModal.addEventListener("click", deleteRowCart = () => {
                                totalPriceNumber = totalPriceNumber - result
                                modalTotalPrice.innerText = "Montant total : " + totalPriceNumber.toFixed(2) + " €"
                                rowCart.remove()
                            })
                            valDivModal.appendChild(deleteButtonModal)
                            rowCart.append(valDivModal)
                            //Création du paragraphe affichant le résultat total
                            totalPriceNumber = totalPriceNumber + result
                            modalTotalPrice.innerText = "Montant total : " + totalPriceNumber.toFixed(2) + " €"
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
const clearCategory = () => {
    articleContent.innerText = ""
}
searchCategory()
    //bonus panier jolie