const baseURL = "https://grokart.onrender.com";

export const getProducts = async() => {
    return await fetch(baseURL + "/products").then(res => res.json());
};

export const getCustomers = async() => {
    return await fetch(baseURL + "/users").then(res => res.json());
};

