
import { action, observable, computed } from 'mobx'
import { useStaticRendering } from 'mobx-react'


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
        this.cart.push(product)
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


