export const opnMenuDisplayer = document.getElementById("opnMenuDisplayer")

export default function getListOfItemsFromLocalStorage() {
	let listOfItems = []
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i).startsWith("tr-")) {
			listOfItems.push(localStorage.key(i))
		}
	}

	listOfItems.sort()

	let newListOfItems = listOfItems.map((item, idx) => {
		return `<div>${idx + 1}- ${item.slice(3)}</div>`
	})
	opnMenuDisplayer.innerHTML = newListOfItems.join("")
	opnMenuDisplayer.style.display = "block"

	opnMenuDisplayer.addEventListener("mouseleave", () => {
		opnMenuDisplayer.style.display = "none"
	})
}
