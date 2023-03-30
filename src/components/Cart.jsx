import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import "../assets/styles/cart.css";
import empty from "../assets/images/empty.png";
import { Link } from "react-router-dom";
import {
  decrementCount,
  deleteProduct,
  incrementCount,
} from "../features/basketSlicer";
export default function Cart() {
  const products = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();
  if (products.length === 0) {
    return (
      <div className="cartbox">
        <h2>Your Cart Is Empty</h2>
        <img style={{ height: "300px" }} src={empty} alt="" />
        <Link className="cart-btn" to={"/collections"}>
          Go to shopping
        </Link>
      </div>
    );
  }
  return (
    <div >
      <div className="table-responsive ">
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Photo</th>
              <th scope="col">Quantity</th>
              <th x scope="col">
                Price
              </th>
              <th x scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr className="text-center">
                  <td className="w-50 " style={{ borderRight: "1px solid" }}>
                    {item.title}
                  </td>
                  <td style={{ borderRight: "1px solid" }}>
                    {" "}
                    <img style={{ height: "80px" }} src={item.image} alt="" />
                  </td>
                  <td className="user-select-none" style={{ borderRight: "1px solid" }}>
                    <span>
                      <AiOutlinePlus
                      style={{cursor: 'pointer'}}
                        onClick={() => dispatch(incrementCount(item.id))}
                      />
                      <span className="mx-1 ">{item.count}</span>{" "}
                      <AiOutlineMinus
                      style={{cursor: 'pointer'}}
                        onClick={() => dispatch(decrementCount(item.id))}
                      />
                    </span>
                  </td>
                  <td style={{ borderRight: "1px solid" }}>{item.price}$</td>
                  <td className="text-danger  fs-4">
                    <AiFillDelete
                    style={{cursor: 'pointer'}}
                      onClick={() => dispatch(deleteProduct(item.id))}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

     
      <p className="total col-lg-4 list-unstyled">
        Total price: {""}
        {products.reduce(
          (total, item) => (Number(total) + item.price * item.count).toFixed(2),
          0
        )}
        {""} $
      </p>
     
    </div>
  );
}
