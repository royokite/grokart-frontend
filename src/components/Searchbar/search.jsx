import React, { useState } from "react";
import "./search.css";


function SearchBar({ placeholder, data }) {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [productEntered, setProductEntered] = useState("");

  const handleFilter = (event) => {
    const searchProduct = event.target.value;
    setProductEntered(searchProduct);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchProduct.toLowerCase());
    });

    if (searchProduct === "") {
      setFilteredProduct([]);
    } else {
      setFilteredProduct(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredProduct([]);
    setProductEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={productEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredProduct.length === 0 ? (
            <FaSearch/>
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div> */}
      {filteredProduct.length !== 0 && (
        <div className="productResult">
          {filteredProduct.slice(0, 15).map((value, key) => {
            return (
              <a className="productItem" href={value.link} >
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