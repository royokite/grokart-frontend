const baseURL = "http://localhost:5000";

export const getProduct = async() => {
    return await fetch(baseURL + "/products").then(res => res.json());
};