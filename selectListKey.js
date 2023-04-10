import { newListTitle } from "./script.js"
import { makeListDisplayerChildrensEditable } from "./addTaskToList.js"

const listDisplayer = document.getElementById("listDisplayer")

function populateDataWhenOpenBtnIsClick() {
	const listOfAvailableKeys = document.querySelectorAll(".opnMenuDisplayer div")
	listOfAvailableKeys.forEach((listKey, idx) => {
		idx = idx + 1
		listKey.addEventListener("click", event => {
			newListTitle.value = event.target.innerText.slice(3)
			let localStorageData = JSON.parse(
				localStorage.getItem("tr-" + event.target.innerText.slice(3))
			)

			let templateDataReadyToDisplay = localStorageData.map(data => {
				let checkbox = data.isItemChecked
					? `<input type="checkbox" checked class="checkbox"></input>`
					: `<input type="checkbox" class="checkbox"></input>`

				return ` <ul class="ulElement">
                <button class="listDelBtn btn">x</button>
                         ${checkbox}
                    <li class="liElement">${data.itemData}</li>
                         </ul>
                     `
			})
			listDisplayer.innerHTML = templateDataReadyToDisplay.join("")
			opnMenuDisplayer.style.display = "none"
			makeListDisplayerChildrensEditable()
		})
	})
}

function delListfromLocalStorage() {
	const listOfAvailableKeys = document.querySelectorAll(".opnMenuDisplayer div")
	listOfAvailableKeys.forEach((listKey, idx) => {
		idx = idx + 1
		listKey.addEventListener("click", event => {
			localStorage.removeItem("tr-" + event.target.innerText.slice(3))
			opnMenuDisplayer.style.display = "none"
			location.reload()
		})
	})
}

export { populateDataWhenOpenBtnIsClick, delListfromLocalStorage }
