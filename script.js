import addTaskToList from "./addTaskToList.js"
import saveListFunc from "./saveList.js"
import getListOfItemsFromLocalStorage from "./getListOfItems.js"
import createNewList from "./createNewList.js"

const newListBtn = document.getElementById('newListBtn')
const addBtn = document.getElementById("addBtn")
const savBtn = document.getElementById("savBtn")
const delListBtn = document.getElementById("delListBtn")
const opnListBtn = document.getElementById("opnListBtn")
const txtInp = document.getElementById("txtInp")
const newListTitle = document.getElementById("newListTitle")


document.onload = txtInp.focus()

addBtn.addEventListener("click", addTaskToList)
savBtn.addEventListener("click", saveListFunc)
opnListBtn.addEventListener('click', getListOfItemsFromLocalStorage)
txtInp.addEventListener("keydown", event => event.key === "Enter" && addTaskToList())
newListTitle.addEventListener("keydown", event => event.key === "Enter" && txtInp.focus())
newListBtn.addEventListener("click", createNewList)
delListBtn.addEventListener("click", getListOfItemsFromLocalStorage)
// delListBtn.addEventListener("click", deleteSelectedListFromLocalStorage)
// --------------CRUD---------------------------------------








export {txtInp}







/* READ - open list
// display dropdown menu - sudo element :: after
// call function that displays list of items
// return array
// when any item from array is clicked then use that item as key starage.getItem(incomingKey)
// now i map trhu the info and return a new array including the [x] button , probaply create element and appendfisrtChild
// display new array under listDisplayer
// use local storage.getItem
// tranform objects from json to js object
// replace new list innerHTML with name of list 
*/

/* UPDATE

*/

/* DELETE
	1. prompt "are you sure you want to delete this list"
	2. delelete from local storage
// display dropdown menu - sudo element :: after
// call function that displays list of items
// return array
// when any item from array is clicked then use that item as key starage.delete(incomingKey)

	// FUNCTION to delete the list
// function deleteCompleted() {
//     console.log(tasksText)
// }
*/

// FUNCION for the save button
// use the localStorage to store list

// 2ND PART OF PROJECT -  is to be able to save to a databas
// use fetch
// http verbs to create crud operations
// not sure to use firestore or mongo
