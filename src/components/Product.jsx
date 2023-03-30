import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../product";
import "../assets/styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../features/basketSlicer";
export default function Product() {
  const { productId } = useParams();

  const filterProduct = data.productData.find(
    (item) => item.id === Number(productId)
  );

  const [image, setImage] = useState(filterProduct.image);
  const getImage = (e) => {
    setImage(e.target.src);
  };
  const [month, setMonth] = useState(6);
  const [resultPrice, setResultPrice] = useState();

  useEffect(() => {
    setResultPrice((filterProduct.price / month).toFixed(1));
  }, [filterProduct.price, month]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket.products);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const addToCart = () => {
    if (products.find((item) => item.id === Number(productId))) {
      setType("danger");
      setMessage("Has been added");
      setTimeout(() => {
        setType("");
      }, 1500);
    } else {
      setType("success");
      setMessage("Added to cart");
      dispatch(addToBasket(filterProduct));
      setTimeout(() => {
        setType("");
      }, 1500);
    }
  };

  return (
    <div >
      {type && (
        <div className="box-message mt-3">
          <div className={`alert alert-${type}`}>{message}</div>
        </div>
      )}
      <div className="container mt-5 ">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="d-flex ">
              {filterProduct.images.map((item) => {
                return (
                  <img
                    key={item}
                    onClick={getImage}
                    className="image"
                    src={item}
                    alt=""
                  />
                );
              })}
              <img
                onClick={getImage}
                className="image"
                src={filterProduct.image}
                alt=""
              />
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <img
                  style={{ height: "300px" }}
                  src={image}
                  alt={filterProduct.title}
                />
              </div>
            </div>
            <h3 className="mt-5">{filterProduct.title}</h3>
            <div className="d-flex align-items-center gap-5 mt-3">
              <h4>{filterProduct.price} $</h4>
              <button onClick={addToCart} className="btn btn-success">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <input
              className="form-range"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
              type="range"
              min={6}
              max={18}
              step={3}
            />

            <div className="monthShow">
              <p>{month} month</p>
              <p> Monthly payment : {resultPrice}$ </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="w-50">
            {" "}
            <ul className="list-group">
              {filterProduct.info.key.map((item) => {
                return (
                  <li style={{height: '60px'}} className=" list-group-item list-group-item-primary list-group-item-action ">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-50">
            {" "}
            <ul className="list-group">
              {filterProduct.info.value.map((item) => {
                return (
                  <li style={{height: '60px'}} className=" list-group-item list-group-item-primary list-group-item-action ">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
