function About(){
    const container = document.querySelector("#content")

    const div = document.createElement("div")
    div.className = "aboutContainer"

    const header = document.createElement("h1")
    header.textContent = "About Us"

    const paragraph = document.createElement("p")
    paragraph.textContent = "Welcome to Thai Food Restaurant, where we bring the heart and soul of Thai cuisine to every dish. Inspired by the vibrant street food and classic flavors of Thailand, our menu is crafted with authentic ingredients and traditional recipes passed down through generations. Whether you're savoring our rich Massaman Curry, zesty Tom Yum soup, or the classic Pad Thai, each bite is a journey through Thailand’s diverse culinary landscape. Join us to experience warm hospitality and flavors that transport you straight to Thailand!"

    div.appendChild(header)
    div.appendChild(paragraph)

    container.appendChild(div)
    
}

export { About }