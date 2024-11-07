function Menu(){

    const menu = [
        {
            title: "Spicy shrimp soup",
            description:"Tom yum goong is a bold, refreshing blend of fragrant lemongrass, chilli, galangal, kaffir lime leaves, shallots, lime juice, and fish sauce. Containing succulent river shrimps and straw mushrooms, this spicy and sour soup is best paired with steamed white rice.",
            price: "£10.99"
        },
        {
            title:"Spicy green papaya salad",
            description:"Som tum, or spicy green papaya salad, comes from Thailand’s north-eastern state of Isaan.",
            price: "£7.99"
        },
        {
            title:"Thai-style fried noodles",
            description:"Pad Thai is one of Thailand’s most recognised dishes. Fistfuls of small, thin or wide noodles, along with crunchy beansprouts, onion, and egg are stir-fried in a searing hot wok.",
            price: "£12.99"
        },
        {
            title:"Stir-fried basil and pork",
            description:"Pad krapow moo is a 1-plate Thai dish you can enjoy for lunch or dinner. Minced pork, holy basil leaves, large fresh chilli, pork, green beans, soy sauce, and sugar are stir-fried in a wok. The cooked mixture is piled onto a plate of steamed white rice and topped with a fried egg (kai dao).",
            price: "£15.99"
        },
        {
            title:"Green chicken curry",
            description:"Gaeng keow wan kai gets its unique colour from green chillies, though ingredients used are like most Thai curries.",
            price: "£13.99"
        },
        {
            title:"Stir-fried chicken with cashew nuts",
            description:"Kai pad med ma muang is basically stir-fried chicken with cashew nuts. This dish also contains soy sauce, honey, onions, chillies, and pepper, as well as a variety of vegetables (usually chopped bell peppers or carrots).",
            price: "£9.99"
        }
    ]

    const container = document.querySelector("#content")

    const div = document.createElement("div")
    div.className = "menuContainer"

    const haeder = document.createElement("h1")
    haeder.textContent = "Menu"

    const menuWrapper = document.createElement("div")
    menuWrapper.className = "menuWrapper"

    menu.map((item) => {

        const menuCell = document.createElement("div")
        menuCell.className = 'menuCell'

        const foodTitle = document.createElement("h2")
        foodTitle.textContent = item.title

        const foodDescription = document.createElement("p")
        foodDescription.textContent = item.description

        const foodPrice = document.createElement("span")
        foodPrice.className = "price"
        foodPrice.textContent = item.price

        menuCell.appendChild(foodTitle)
        menuCell.appendChild(foodDescription)
        menuCell.appendChild(foodPrice)

        menuWrapper.appendChild(menuCell)
    })

    div.appendChild(haeder)
    div.appendChild(menuWrapper)

    container.appendChild(div)

}

export { Menu }