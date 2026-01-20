class Drink{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const spicedCider = new Drink("Spiced cide", "Apples brewed with honey and crushed spice, served warm to numb the chill.", "1 gold coin")
const morningAle = new Drink("Morning Ale", "A thin, pale ale brewed in-house. Weak enough to drink early, strong enough to settle the nerves." ,"2 gold coins")
const blackTea = new Drink("Black Tea","Bitter herbal tea steeped until dark. Calms the hands. Sharpens the mind.", "1 gold coin")

export const drinks = [spicedCider, morningAle, blackTea]