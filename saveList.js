import collectData from "./collectData.js"

const newListTitle = document.getElementById("newListTitle")

export default function saveListFunc() {
	const ulElems = document.querySelectorAll(".ulElement")
	const messangerElem = document.getElementById("messanger")

	if (!newListTitle.value) {
		alert("Please Name Your List")
		newListTitle.focus()
		return
	}
    
	if (ulElems.length === 0) {
		alert("Your list is empty - Please add new task")
		return
	}
	const dataJson = JSON.stringify(collectData())
	localStorage.setItem('tr-' + newListTitle.value.toString().toLowerCase(), dataJson)

	messangerElem.innerText = "List Saved !"
	 setTimeout(() => {
		messangerElem.innerHTML = ""
	 }, 1500);

}