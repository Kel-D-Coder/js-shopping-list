const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const clearBtn = document.querySelector('.btn-clear')

const addItemToStorage = () => {

   const newItem = itemInput.value

   let itemFromStorage;

   if (localStorage.getItem('items') === null) {
      itemFromStorage = []
   } else {
      itemFromStorage = JSON.parse(localStorage.getItem('items'))
   }
   itemFromStorage.push(newItem)

   localStorage.setItem('items', JSON.stringify(itemFromStorage))
   return;

}

function addItemToDom() {
   //  create list item
      const newItem = itemInput.value
      const li = document.createElement('li')
      li.textContent = newItem

      li.style.color = 'purple'

      itemList.appendChild(li)
   //End of list item
      
   //Create new button
      const newButton = document.createElement('button')
      newButton.className = 'remove-item btn-link text-red'
   //End of new button
      
   //Create Icon
      const newIcon = document.createElement('i')
      newIcon.className = 'fa-solid fa-xmark'
      newButton.appendChild(newIcon)
      li.appendChild(newButton)
      itemInput.value = ''
   //End of icon
}

// Display Items from storage
// const displayItemsFromStorage = () => {
//    const itemFromStorage = addItemToStorage()
// }

function displayItems() {
   const itemFromStorage = addItemToStorage();
   itemFromStorage.forEach((item) => {
      addItemToDom()
   })
}

const addItem = (e) => {
   e.preventDefault()

   const newItem = itemInput.value

   //add items to storage
   addItemToStorage()

   //validate Input
   if (newItem === '') {
      alert('Please add an item')
      return;
   } else {
      addItemToDom()
   }

}
//Remove items

const removeItem = (e) => {
   if (e.target.parentElement.classList.contains('remove-item')) {
      e.target.parentElement.parentElement.remove()
   }
}

//Clear Items

const clearList = () => {
   itemList.remove()
   localStorage.clear()
}

//Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearList)
document.addEventListener('DOMContentLoaded', displayItems)