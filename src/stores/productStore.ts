import { createClient } from  "../medusa-client";
import { writable } from "svelte/store";
export const productStore = writable([]);

const client = createClient();

export const getProducts = async () => {
    const { products } = await client.products.list();
    console.log(client);
    console.log(products);
    productStore.set(products);
};

export const getCart = async ()=> {
    let cartId = null;
    if (localStorage) {
      cartId = localStorage.getItem("cart_id")
    }
    if (cartId) {
      client.carts.retrieve(cartId).then(({cart}) => {
        console.log(cart);
      })
    } else {
      createCart();
    }
}

export const createCart = async () => {
    if (localStorage) {
        localStorage.removeItem("cart_id")
      }
    const cart = await client.carts.create({}).then(({cart}) => {
        localStorage.setItem("cart_id", cart.id)
        console.log(cart)
    })
};

