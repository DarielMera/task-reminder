import saveListFunc from "./saveList.js"
import { txtInp } from "./script.js"

export default function createNewList() {
	const newListTitle = document.getElementById("newListTitle")
	const listDisplayer = document.getElementById("listDisplayer")
	if (newListTitle.value && listDisplayer.hasChildNodes()) {
		saveListFunc()
		alert("Your last reminder was saved automatically")
		newListTitle.value = ""
		listDisplayer.remove()
		location.reload()
	}
    txtInp.focus()
    
}
