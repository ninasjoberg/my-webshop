
import { action, observable, computed, autorun } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import { saveItemToLocalStorage, updateItemListToLocalStorage } from './utils/localStorage'


const isServer = !process.browser
useStaticRendering(isServer)


class Store {
    @observable cart = []

    constructor(isServer, initialData = {}) {
        //this.cart = !!initialData.cart
        this.cart
    }

    @action setCart = (cartFromLocalStorage) => {
        this.cart = cartFromLocalStorage
    }

    @action addCart = (product) => {
        const foundInCart = this.cart.some((item) => {
            return item.title === product.title
        });

        if (foundInCart) {
            const newCart = this.cart.map((item) => {
                if (item.title === product.title) {
                    return {
                        ...item,
                        quantity: item.quantity +1
                    }
                }
                return item
            });
            this.cart = newCart
            updateItemListToLocalStorage(newCart, 'cartArray')
        }
        else {
            this.cart.push(product)
            saveItemToLocalStorage(product, 'cartArray')
        }
    }


    @computed get cartCount() {
        return this.cart.length
    }
}

let store = null


export function initializeStore(initialData) {
    // Always make a new store if server, otherwise state is shared between requests
    if (isServer) {
        return new Store(isServer, initialData)
    }
    if (store === null) {
        store = new Store(isServer, initialData)
    }
    return store
}


