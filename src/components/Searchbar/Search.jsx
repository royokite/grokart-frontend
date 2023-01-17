import React, { useState } from "react";
import "./SearchBar.css";
import Products from "../Products";


function SearchBar({ placeholder, product }) {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchProduct = event.target.value;
    setWordEntered(searchProduct);
    const newFilter = product.filter((value) => {
      return value.name.toLowerCase().includes(searchProduct.toLowerCase());
    });

    if (searchProduct === "") {
        setFilteredProduct([]);
    } else {
        setFilteredProduct(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredProduct([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredProduct.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredProduct.length !== 0 && (
        <div className="dataResult">
          {filteredProduct.slice(0, 10).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
