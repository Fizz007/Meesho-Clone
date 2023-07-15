import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import "../Address/Address.css";
import { CartCoontext } from "../../Context/Context";
import Header from "../Header";
let data = [
  
];
export default function Address() {
  let [inp, setInp] = useState(data);
  const Globalstate = useContext(CartCoontext);  
  const dispatch = Globalstate.dispatch;
  const state = Globalstate.state;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    // toast.success("Order has been placed")
    localStorage.removeItem("usercart")
    localStorage.removeItem("totalPrice")
    state.map((item)=> { 
      dispatch({ type: "REMOVE", payload: item })
    })
    navigate("/payment");
  };

  const changeHandler = (e) => {
    let newInp = [...inp];
    let { id, value } = e.target;
    newInp[+id] = value;
    setInp(newInp);
  };
  return (
    <>
    <Header/>
    <section id="address-section">
      <form action="" onSubmit={handleSubmit}>
        <h1>ADD ADDRESS</h1>
        <hr />
        <div style={{marginRight:'10px'}}>
          <BiPhone
            size={20} color="#E93599"
          />
          <h2>Contact Details</h2>
        </div>
        <input
          type="text"
          placeholder="Name"
          id="0"
          value={inp[0]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Phone Number"
          id="1"
          value={inp[1]}
          onChange={changeHandler}
        />
        <div style={{marginRight:'10px'}}>
          <CiLocationOn
            size={20} color="#E93599"
          />
          <h2>Address Details</h2>
        </div>
        <input
          type="text"
          placeholder="House no./ Building Name"
          id="2"
          value={inp[2]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Road Name/ Area/ Colony"
          id="3"
          value={inp[3]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Pincode"
          id="4"
          value={inp[4]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          id="5"
          value={inp[5]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="State"
          id="6"
          value={inp[6]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Nearby Location (optional)"
          id="7"
          value={inp[7]}
          onChange={changeHandler}
        />
        <button>Deliver to this Address</button>
      </form>
      <div>
        <h1>Price Details</h1>
        <p>
          Product Charges<span>₹{(localStorage.getItem("totalPrice") * 3)}</span>
        </p>
        <p>
          Delivery Charges<span>+ ₹0</span>
        </p>
        <p>
          COD Charges<span>+ ₹0</span>
        </p>
        <p>
          1st Order Discount<span>- ₹40</span>
        </p>
        <hr />
        <h2>
          Order Total <span>₹{((localStorage.getItem("totalPrice")* 3) - 40).toFixed(2)}</span>
        </h2>
      </div>
    </section>
    </>
  );
}