import "./style.css"
import { loadHomePage } from "./pageload"
import { loadContact } from "./contact"
import { loadMenu } from "./menu"
const contentDiv = document.querySelector("#content")
contentDiv.appendChild(loadMenu())

