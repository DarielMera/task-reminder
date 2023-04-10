export default function collectData() {
	const ulElems = document.querySelectorAll(".ulElement")
	// console.log('collected ulElement:' + ulElems.item(1).innerHTML)

	if (ulElems.length === 0) {
		return
	}

	let listDataArr = []
	// console.log('listDataArr just declared:' + listDataArr)

	ulElems.forEach(ulElem => {
		let listDataObj = {
			isItemChecked: ulElem.childNodes.item(1).checked,
			itemData: ulElem.childNodes.item(2).textContent,
		}
		listDataArr.push(listDataObj)
	})
	// console.log('listDataArr after:' + listDataArr[0].isItemChecked)
	// console.log('listDataArr after:' + listDataArr[0].itemData)

	return listDataArr
}
