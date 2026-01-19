export function loadHomePage(){
    const heading = document.createElement("h1")
    heading.textContent = "Sage's Breakfast Bar"
    const tagline = document.createElement("p")
    tagline.textContent = "Serving breakfast to the purest of hearts"
    const container = document.createElement("div")
    container.append(heading,tagline)
    return container
}