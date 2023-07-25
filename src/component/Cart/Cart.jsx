import { useContext} from "react";
import "./Cart.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { CartCoontext } from "../../Context/Context";

import Header from "../Header";


const Cart = () => {
  const navigate = useNavigate();
  const Globalstate = useContext(CartCoontext);  
  
  const state = Globalstate.state;
 
  localStorage.setItem("usercart", JSON.stringify(state))
   
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return (total + (item.price * 3) * item.quantity );
  }, 0);

  localStorage.setItem("totalPrice",total) 
  // const Ctotal = total + (total*18/100)

  const moveToAddress = () => { 
   navigate('/address');
  };
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <div className="cart">
        {state.map((item, index) => {
          // item.quantity = 1;
      
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.quantity * (item.price * 3) }</p>
              <p>{state[1]}</p>
          
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  <IoAddCircle size={20} />
                </button>

                <p>{item.quantity}</p>
                 

                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  <AiFillMinusCircle size={20} />
                </button>
              </div>
              <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                <RiDeleteBin4Fill className="pointer" />
              </h2>
            </div>
          );
        })}

    
        {state.length > 0 && (
          <>
            <div className="total">
              <h2>₹{total.toFixed(2)}</h2>
            </div>
            <button onClick={moveToAddress} className="btn pointer">
              Continue to Buy
            </button>

           
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )}

        
      </div>
    </>
  );
};

export default Cart;
