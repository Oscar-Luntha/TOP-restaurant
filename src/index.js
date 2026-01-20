import "./style.css"
import { loadHomePage } from "./pageload"
import { loadContact } from "./contact"
import { loadMenu } from "./menu"
const contentDiv = document.querySelector("#content")
const tabButtons = document.querySelectorAll("button")
contentDiv.appendChild(loadHomePage())
tabButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        if(button.id == "home"){
            contentDiv.replaceChildren(loadHomePage())
        }else if (button.id == "menu"){
            contentDiv.replaceChildren(loadMenu())
        }else{
            contentDiv.replaceChildren(loadContact())
        }
    })
})


