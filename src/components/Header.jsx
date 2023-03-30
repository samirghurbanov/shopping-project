import React, { useState } from "react";
import data from "../pages/pages.json";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../assets/styles/header.css";
import { useSelector } from "react-redux";
import Scrollbtn from "./Scroll-btn";
export default function Header() {
  const activeStyle = {
    color: "#43B493",
  };

  const defaultStyle = {
    color: "white",
  };
  const [show, setShow] = useState(false);
  const getMenu = () => {
    setShow(!show);
  };
  const products = useSelector((state) => state.basket.products);

  const testFunc = () => {
    setShow(false)
  }
  return (
   <>
    <div className="container-fluid p-5 header">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Link className="text-decoration-none text-white" to={"/"}>
            LOGO
          </Link>
        </div>
        <div>
          <div className="d-flex align-items-center ">
            <div className="nav1">
              <ul className="nav ">
                {data.menu.map((item) => {
                  return (
                    <NavLink
                      key={item.link}
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                      }
                      to={item.path}
                    >
                      <li className="nav-item">{item.link}</li>
                    </NavLink>
                  );
                })}
              </ul>
            </div>
           
            <span
              style={{ cursor: "pointer" }}
              onClick={getMenu}
              className="menu-bar"
            >
              {!show ? <TiThMenu /> : <AiOutlineClose />}
            </span> 
            <NavLink
              className="text-white fs-4 text-decoration-none ms-2"
              to={"/cart"}
            >
              <span className="store">
                <AiOutlineShoppingCart />
              </span>
              <span className="text-danger storelength fs-6">
               
                {products.length}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`nav-2 ${!show ? "d-none" : "d-flex"}`}>
        <ul className="list-unstyled ">
          <hr className="text-white" />
          {data.menu.map((item) => {
            return (
              <NavLink
              onClick={testFunc}
                key={item.link}
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                to={item.path}
              >
                <li className="nav-item">{item.link}</li>
              </NavLink>
            );
          })}
          <hr className="text-white" />
        </ul>
      </div>
    </div>
    <Scrollbtn />
    </>
  );
}
