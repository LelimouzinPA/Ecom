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
const searchMovie = () => {
    fetch("http://127.0.0.1:5500/assets/json/" + uri)
        .then(fetchResponse => fetchResponse.json())
        .then(jsonContent => {
            clearMovie()
            jsonContent.results.map((article, index) => {
                let coldiv = document.createElement("div")
                coldiv.className = "col-12 col-sm-6 col-lg-3 p-2 d-flex"
                let classdiv = document.createElement("div")
                classdiv.className = "card shadow"
                let imgdiv = document.createElement("img")
                imgdiv.className = " img-flex "
                imgdiv.src = article.image
                let carddiv = document.createElement("div")
                carddiv.className = "card-body "
                let cardtitle = document.createElement("h3")
                cardtitle.className = "card-title"
                cardtitle.innerText = article.product_name
                let cardptitle = document.createElement("p")
                cardptitle.className = "card-text "
                cardptitle.innerText = (article.description != "") ? article.description.substring(0, 200) + " ..." : null
                let pricediv = document.createElement("div")
                pricediv.className = "card-img-overlay"
                let pricepdiv = document.createElement("p")
                pricepdiv.innerText = article.price
                pricepdiv.className = "badge bg-primary text-wrap "
                pricediv.append(pricepdiv)
                carddiv.append(cardtitle, cardptitle, )
                classdiv.append(imgdiv, carddiv, pricediv)
                coldiv.append(classdiv)
                articleContent.append(coldiv)
            })
        })
    const clearMovie = () => {
        articleContent.innerText = ""
    }
}
searchMovie()