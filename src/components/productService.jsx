const baseURL = "http://127.0.0.1:4000";

export const getProducts = async() => {
    return await fetch(baseURL + "/products").then(res => res.json());
};

export const getCustomers = async() => {
    return await fetch(baseURL + "/users").then(res => res.json());
};

