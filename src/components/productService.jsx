export const getProducts = async () => {
  return await fetch("https://grokart-backend.onrender.com/products").then(
    (res) => {
      res.json();
      console.log(res);
    }
  );
};

export const getCustomers = async () => {
  return await fetch( "https://grokart-backend.onrender.com/users"
  ).then((res) => res.json());
};
