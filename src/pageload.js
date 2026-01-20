export function loadHomePage() {
    const container = document.createElement("div")
    container.classList.add("home")
    const heading = document.createElement("h1")
    heading.classList.add("home-title")
    heading.textContent = "Sage's Breakfast Bar"
    const tagline = document.createElement("p")
    tagline.classList.add("home-tagline")
    tagline.textContent = "Serving breakfast to the purest of hearts"
    const descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("home-description")
    descriptionContainer.append(
        paragraph(
            "Sage's Breakfast Bar stands at the edge of the old road, where the forest grows thick and the morning fog clings low to the ground. By dawn, the hearth is already burning, and the smell of smoke and fat drifts through the heavy wooden doors."
        ),
        paragraph(
            "Inside, the tavern is dim and worn. Candlelight flickers against stone walls darkened by years of soot. Long tables bear the scars of knives, tankards, and travelers who did not linger long. This is not a place of songs and laughter — it is a place of rest before hardship."
        ),
        paragraph(
            "Food is served hot and without ceremony. Every meal is meant to weigh heavy in the stomach and steady trembling hands. Many who eat here do so in silence, preparing themselves for the road, the hunt, or whatever waits beyond the village gates."
        )
    )

    container.append(heading, tagline, descriptionContainer)
    return container
}

function paragraph(text) {
    const p = document.createElement("p")
    p.textContent = text
    p.classList.add("home-paragraph")
    return p
}
