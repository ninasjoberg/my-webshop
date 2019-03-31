
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
            return item.id === product.id && item.variant === product.variant
        });

        if (foundInCart) {
            const newCart = this.cart.map((item) => {
                if (item.id === product.id && item.variant === product.variant) {
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

    @action removeFromCart = (product) => {

        console.log('product remove', product )
            const newCart = this.cart.map((item) => {
                console.log(item.variant , product.variant)
                if (item.id === product.id && item.variant === product.variant) {
                    console.log('Remove item', item)
                    return null
                }
                return item
            }).filter(Boolean);
            this.cart = newCart
            console.log(newCart, 'newCart')
            updateItemListToLocalStorage(newCart, 'cartArray')
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


