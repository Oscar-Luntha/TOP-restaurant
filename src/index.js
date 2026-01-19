import "./style.css"
import { loadHomePage } from "./pageload"
const contentDiv = document.querySelector("#content")
contentDiv.appendChild(loadHomePage())

