export function loadHomePage(){
    const heading = document.createElement("h1")
    heading.textContent = "Sage's Breakfast Bar"
    const tagline = document.createElement("p")
    tagline.textContent = "Serving breakfast to the purest of hearts"
    
    const descriptionContainer = document.createElement("div")
    const descriptionP1 = document.createElement("p")
    const descriptionP2 = document.createElement("p")
    const descriptionP3 = document.createElement("p")

    descriptionP1.textContent = "Sage's Breakfast Bar stands at the edge of the old road, where the forest grows thick and the morning fog clings low to the ground. By dawn, the hearth is already burning, and the smell of smoke and fat drifts through the heavy wooden doors."
    descriptionP2.textContent = "Inside, the tavern is dim and worn. Candlelight flickers against stone walls darkened by years of soot. Long tables bear the scars of knives, tankards, and travelers who did not linger long. This is not a place of songs and laughter — it is a place of rest before hardship"
    descriptionP3.textContent = "Food is served hot and without ceremony. Every meal is meant to weigh heavy in the stomach and steady trembling hands. Many who eat here do so in silence, preparing themselves for the road, the hunt, or whatever waits beyond the village gates."

    descriptionContainer.append(descriptionP1,descriptionP2,descriptionP3)
    const container = document.createElement("div")
    container.append(heading,tagline,descriptionContainer)
    return container
}