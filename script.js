import addTaskToList from "./addTaskToList.js"
import saveListFunc from "./saveList.js"
import getListOfItemsFromLocalStorage from "./getListOfItems.js"
import { populateDataWhenOpenBtnIsClick } from "./selectListKey.js"
import { delListfromLocalStorage } from "./selectListKey.js"

const newListBtn = document.getElementById("newListBtn")
const addBtn = document.getElementById("addBtn")
const savBtn = document.getElementById("savBtn")
const delListBtn = document.getElementById("delListBtn")
const opnListBtn = document.getElementById("opnListBtn")
const txtInp = document.getElementById("txtInp")
export const newListTitle = document.getElementById("newListTitle")

document.onload = txtInp.focus()

addBtn.addEventListener("click", addTaskToList)
savBtn.addEventListener("click", saveListFunc)
savBtn.addEventListener("click", () => {
	let output = document.querySelectorAll(".ulElement")
	output.forEach(op => console.log(op.innerHTML))
})
opnListBtn.addEventListener("click", getListOfItemsFromLocalStorage)
opnListBtn.addEventListener("click", populateDataWhenOpenBtnIsClick)
txtInp.addEventListener("keydown", event => event.key === "Enter" && addTaskToList())
newListTitle.addEventListener("keydown", event => event.key === "Enter" && txtInp.focus())
newListBtn.addEventListener("click", () => location.reload())
delListBtn.addEventListener("click", getListOfItemsFromLocalStorage)
delListBtn.addEventListener("click", delListfromLocalStorage)
// --------------CRUD---------------------------------------

export { txtInp }
