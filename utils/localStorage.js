export function saveItemToLocalStorage(product, listName) {
    let cartArray = getItemListFromLocalStorage(listName)
    if (cartArray) {
        cartArray.push(product)
    }
    localStorage.setItem(listName, JSON.stringify(cartArray));
}

export function getItemListFromLocalStorage(listName) {
    const storedToDoList = JSON.parse(localStorage.getItem(listName));
    return storedToDoList || [];
}


