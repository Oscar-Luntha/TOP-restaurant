import { drinks } from "./drinks"
import { mainPlates } from "./mainPlates"

export function loadMenu() {
    const menuContainer = document.createElement("section")
    menuContainer.classList.add("menu")
    const foodDiv = createSection("Main Plates")
    const drinkDiv = createSection("Drinks")
    populateFood(foodDiv)
    populateDrinks(drinkDiv)
    menuContainer.append(foodDiv, drinkDiv)
    return menuContainer
}

function createSection(titleText) {
    const section = document.createElement("div")
    section.classList.add("menu-section")

    const title = document.createElement("h2")
    title.textContent = titleText

    section.appendChild(title)
    return section
}

function populateFood(section) {
    mainPlates.forEach(food => {
        section.appendChild(createItem(food))
    })
}

function populateDrinks(section) {
    drinks.forEach(drink => {
        section.appendChild(createItem(drink))
    })
}

function createItem(item) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("menu-item")

    const name = document.createElement("h3")
    name.textContent = item.name

    const description = document.createElement("p")
    description.textContent = item.description

    const price = document.createElement("span")
    price.classList.add("menu-price")
    price.textContent = item.price
    wrapper.append(name, description, price)
    return wrapper
}
