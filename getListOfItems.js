const opnMenuDisplayer = document.getElementById("opnMenuDisplayer")

export default function getListOfItemsFromLocalStorage() {
    let listOfItems = []
    for (let i = 0; i < localStorage.length ; i++) {
       if(localStorage.key(i).startsWith("tr-")){
           listOfItems.push(localStorage.key(i))
       } 
    }
    let newListOfItems = listOfItems.map(item => {
       return (
           `<div>${item.slice(3)}</div>`
       )
    })
    opnMenuDisplayer.innerHTML = newListOfItems.join('')
    opnMenuDisplayer.style.display = 'block'
    console.log(listOfItems)

    selectListKey()
    opnMenuDisplayer.addEventListener("mouseleave",() => {
        opnMenuDisplayer.style.display = 'none'
    })

}


function selectListKey() {
   const listOfAvailableKeys = document.querySelectorAll('.opnMenuDisplayer div')
   listOfAvailableKeys.forEach(listKey => {
       listKey.addEventListener("click", event => {
           console.log(JSON.parse(localStorage.getItem('tr-' + event.target.innerText.toString())))
           // 
           opnMenuDisplayer.style.display = 'none'

       })
       
   })
}