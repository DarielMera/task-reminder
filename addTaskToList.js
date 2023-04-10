import { txtInp } from "./script.js"

const listDisplayer = document.getElementById("listDisplayer")

export default function addTaskToList() {
	const valueFromText = txtInp.value
	const ulElem = document.createElement("UL")
	const liElem = document.createElement("LI")
	const chkElem = document.createElement("INPUT")
	const listDelBtn = document.createElement("BUTTON")

	chkElem.setAttribute("type", "checkbox")
	chkElem.setAttribute("class", "checkbox")
	ulElem.setAttribute("class", "ulElement")
	liElem.setAttribute("class", "liElement")
	listDelBtn.setAttribute("class", "btn")
	listDelBtn.setAttribute("class", "listDelBtn")

	if (valueFromText === "") {
		alert("Please Enter Task")
		return
	}

	listDelBtn.appendChild(document.createTextNode("x"))
	listDelBtn.classList.add("btn")

	liElem.innerText = valueFromText
	ulElem.appendChild(listDelBtn)
	ulElem.appendChild(chkElem)
	ulElem.appendChild(liElem)
	listDisplayer.appendChild(ulElem)

	txtInp.value = ""
	txtInp.focus()

	const chkBoxes = document.querySelectorAll(".checkbox")
	const listDelBtns = document.querySelectorAll(".listDelBtn")
	const ulElems = document.querySelectorAll(".ulElement")

	chkBoxes.forEach(chkBox => {
		chkBox.addEventListener("click", () => {
			if (chkBox.checked) {
				chkBox.nextSibling.classList.add("active")
			}

			if (!chkBox.checked) {
				chkBox.nextSibling.classList.remove("active")
				chkBox.checked = false
			}
		})
	})

	listDelBtns.forEach((listDelBtn, idx) => {
		listDelBtn.addEventListener("click", () => {
			ulElems.item(idx).remove()
		})
	})

	makeListDisplayerChildrensEditable()
}

export function makeListDisplayerChildrensEditable() {
	const listDisplayerChildrens = document.querySelectorAll(".liElement")
	listDisplayerChildrens.forEach(item => {
		item.addEventListener("click", () => (item.contentEditable = true))
		item.addEventListener("keydown", event => event.key === "Enter" && txtInp.focus())
	})
}
