import React from 'react'
import '../assets/styles/Itemcard.css'
export default function Itemcard({title,price,image,}) {
  return (
    <div className="card mt-3 shadow cardbox ">
        <img  className="card-img-top w-100" src={image} alt="Title" />
        <div className="card-body ">
            <h4 className="card-title cardbox-title">{title}</h4>
            <p className="border p-2 fs-5 text-danger fw-bold card-text">{price} $</p>
        </div>
    </div>
  )
}
