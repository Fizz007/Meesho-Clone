import React, { useContext, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import { CartCoontext } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import PacmanLoader from "react-spinners/PacmanLoader";

const Productpage = () => {
  const Globalstate = useContext(CartCoontext);
  const navigate = useNavigate();
  const dispatch = Globalstate.dispatch;
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const [clicked, setClicked] = useState(false);
  


  var qty = "quantity";
  var val = 1;
  details[qty] = val;


 
  function clickHandle() {
    setClicked(true);
  }

  function addtoCart() {
    if(localStorage.getItem("user") === null){
      toast.error("Please login first",{
        position: toast.POSITION.TOP_RIGHT,}
      )
     
      navigate('/signup')
    }else{

      dispatch({ type: "ADD", payload: details  });
    }
  }
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`
        );
        const data = await response.json();

        setTimeout(() => {
          setDetails(data);
          setLoader(true);
          // console.log(details);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!loader) {
    return (
      <PacmanLoader
        color="rgb(244, 51, 151)"
        cssOverride={{
          left: "42%",
          position: "absolute",
          textAlign: "center",
          top: "42%",
        }}
        size={45}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <>
      <Header />
      <div className=" detailsCard">
        <div className="details">
          <div className="big-img">
            <img src={details.image} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{details.title}</h2>
              <span>₹{details.price}</span>
            </div>
            <span
              className="rating"
              style={{
                backgroundColor:
                  details.rating.rate >= 3.5
                    ? " #23bb75"
                    : "rgb(244, 182, 25) ",
              }}
            >
              {details.rating.rate} <FaRegStar color="#fff" />
            </span>

            
            <p>{details.description}</p>
            <button className="btn" onClick={addtoCart}>
       
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
