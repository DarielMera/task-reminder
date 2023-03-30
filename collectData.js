export default function collectData() {
	const ulElems = document.querySelectorAll(".ulElement")
    if (ulElems.length === 0){return} 
	let listDataArr = []
	ulElems.forEach(ulElem => {
		let listDataObj = {
			isItemChecked: ulElem.childNodes.item(1).checked,
			itemData: ulElem.childNodes.item(2).textContent,
		}
		listDataArr.push(listDataObj)
	})

    return listDataArr
}


