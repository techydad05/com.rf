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

export const createCart = async () => {
    if (localStorage) {
        localStorage.removeItem("cart_id")
      }
    const cart = await client.carts.create({});
    console.log("cart:", cart);
};