import React, { useState } from "react";
import data from "../product";
import Itemcard from "../components/Itemcard";
import { Link } from "react-router-dom";
import "../assets/styles/collections.css";
export default function Collections() {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [theme,setTheme] = useState('')
  const filterProduct = data.productData.filter((product) => {
    if (category === "All") {
      return product;
    } else if (category) {
      return product.category === category;
    } else if (value === "") {
      return product;
    } else if (product.title.toLowerCase().includes(value.toLowerCase())) {
      return product;
    }
  });
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  function handleValueChange (e){
    setTheme(e.target.value)
  }
  
  const sortingProduct = filterProduct.sort((a,b) => {
    if(theme === 'Alphabetic'){
      return a.title.localeCompare(b.title)
    }else if (theme === 'Low to High'){
      return a.price - b.price
    }else if(theme ==='High to Low'){
      return b.price - a.price
    }
  })

  return (
    <>
      <div className="  container">
        <div className="d-flex mt-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="form-control "
          />
          <select
            onChange={handleCategoryChange}
            className="form-select w-50"
            name=""
            id=""
          >
            
            <option value="All">All</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Watchs">Watchs</option>
            <option value="Headphones">Headphones</option>
            <option value="Notebooks">Notebooks</option>
          </select>
          <select
            onChange={handleValueChange}
            className="form-select w-50"
            name=""
            id=""
          >
            <option value="Select">Select</option>
            <option value="Alphabetic">Alphabetic</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
        <div className="row">
          {sortingProduct.map((item) => {
            return (
              <div key={item.id} className="col-md-6 col-lg-3">
                {" "}
                <Link
                  className="text-decoration-none text-black"
                  to={`/collections/product/${item.id}`}
                >
                  <Itemcard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
