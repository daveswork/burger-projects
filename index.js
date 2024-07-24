const burgersList = document.getElementById('burgers-list')

console.log(burgersList)

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    console.log(burgers)
    burgers.forEach(addBurgerToBurgerList)    
})

function addBurgerToBurgerList(burger){
    const listElement = document.createElement("li")

    const idElement = document.createElement("h3")
    idElement.textContent = burger.id

    const nameElement = document.createElement('h3')
    nameElement.textContent = `Name: ${burger.name}`

    const imageElement = document.createElement("img")
    imageElement.src = burger.image

    const priceElment = document.createElement("h3")
    priceElment.textContent = burger.price

    listElement.appendChild(idElement)
    listElement.appendChild(nameElement)
    listElement.appendChild(imageElement)
    listElement.appendChild(priceElment)
    
    console.log(listElement)
    burgersList.appendChild(listElement)
}