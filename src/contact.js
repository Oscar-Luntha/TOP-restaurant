export function loadContact() {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact")
    const intro = document.createElement("p")
    intro.classList.add("contact-intro")
    intro.textContent = "Sage’s Breakfast Bar does not take reservations."
    const rules = document.createElement("div")
    rules.classList.add("contact-rules")
    rules.append(
        paragraph("If the door is open, there is food."),
        paragraph("If the hearth is lit, there is warmth."),
        paragraph("If you arrive before dawn, wait.")
    )
    const location = document.createElement("p")
    location.classList.add("contact-location")
    location.textContent ="The tavern stands beside the old road, just beyond the treeline, where the crows gather in the morning and the fog does not lift quickly. Follow the smell of smoke and bread. Ignore the silence."
    const closing = document.createElement("div")
    closing.classList.add("contact-closing")
    const closing1 = document.createElement("p")
    closing1.textContent = "If you have questions, ask the keeper."
    const closing2 = document.createElement("p")
    closing2.textContent = "If you have trouble, settle it elsewhere."
    closing.append(closing1, closing2)
    contactContainer.append(intro, rules, location, closing)
    return contactContainer
}
function paragraph(text){
    const p = document.createElement("p")
    p.textContent = text;
    p.classList.add("rule")
    return p
}