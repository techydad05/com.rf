import Medusa from "@medusajs/medusa-js";

const BACKEND_URL =
 import.meta.env.VITE_MEDUSA_BACKEND_URL || "http://localhost:9000";

export const createClient = () => {
    // @ts-ignore
    const client = new Medusa({ baseUrl: BACKEND_URL });
    console.log("Medusa Client:", client);
    return client;
}