class FoodItem {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price
    }
}

const huntersCut = new FoodItem("Hunters Cut", "Slow-roasted pork or venison, sliced thick and served with onions seared in the same pan. Heavy, salty, and meant to last until dusk.", "30 silver coins")
const ashPorridge = new FoodItem("Ash Porridge", "Oats boiled long in milk and water, sweetened with honey and bruised fruit. Soft enough for tired mouths, warm enough to chase off the cold.", "1 gold coin")
const bakersShare = new FoodItem("Bakers Share", "A dark loaf torn by hand, served with butter, soft cheese, and whatever preserves remain from last season.", "3 gold coins")

export const mainPlates = [huntersCut, ashPorridge, bakersShare]