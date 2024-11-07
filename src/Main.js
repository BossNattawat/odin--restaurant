
function Main(){

    const container = document.querySelector("#content")

    const div = document.createElement("div")
    div.className = "mainContainer"

    const titleText = document.createElement("h1")
    titleText.textContent = "Discover the Flavors of Thailand"

    const paragraph = document.createElement("p")
    paragraph.textContent = "Experience the vibrant flavors of Thailand with dishes like Pad Thai, Green Curry, and Som Tum. Thai cuisine masterfully blends sweet, sour, salty, and spicy tastes, creating a unique and unforgettable culinary journey. Discover the essence of Thai culture in every bite with our guide to authentic recipes, flavors, and dining tips!"

    div.appendChild(titleText)
    div.appendChild(paragraph)

    container.appendChild(div)

}

export { Main }