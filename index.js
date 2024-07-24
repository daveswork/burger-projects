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

    const nameElement = document.createElement('h3')
    nameElement.textContent = `Name: ${burger.name}`

    const idElement = document.createElement("h3")

    listElement.appendChild(nameElement)
    console.log(listElement)
    burgersList.appendChild(listElement)
}