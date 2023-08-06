import React from "react";
import "../Product/Product.css";
import { FaRegStar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { Link,  } from "react-router-dom";

const Product = (props) => {
  
  const { item } = props;
  var qty = "quantity";
  var val = 1;
  item[qty] = val;

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/productpage/${item.id}`}>
        <div className="each-item">
          <div className="img-wrapper">
            <img src={item.image} alt="product-img" />
          </div>
          <div className="content-wrapper">
            <h3 className="brand-name">{item.title}</h3>
            <p className="firstorder">
              <span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CiDiscount1 color="rgb(244, 51, 151)" size={25} /> ₹
                {Math.floor(Math.random() * 40)} discount on 1st order
              </span>
            </p>
            <p className="price_rate">
              <span className="b-d-price">₹{(item.price * 3).toFixed(0)}</span>
              <div className="bg">
                <span
                  className="b-rating"
                  style={{
                    backgroundColor:
                      item.rating.rate >= 3.5
                        ? " #23bb75"
                        : "rgb(244, 182, 25) ",
                  }}
                >
                  {item.rating.rate} <FaRegStar className="star" size={15} />
                </span>
              </div>
            </p>
            {/* <button
                              className='add-to-cart-btn'
        
                              onClick={()=> dispatch({type:'ADD', payload: item })}
        
                              >
                              Add to Cart
                              </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
