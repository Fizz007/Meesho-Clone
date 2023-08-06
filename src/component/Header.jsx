import React, { useContext, useEffect, useState } from "react";
import meesho from "../img/meesho.png";
import search from "../img/search.png";
import mobile from "../img/mobile.png";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Badge } from "@mui/material";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { CartCoontext } from "../Context/Context";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import CreateItem from "../State/CreateItem";

const Header = () => {
  const [show, setShow] = useState("none");
  const [user] = useAuthState(auth);
  const [playstore, setPlaystore] = useState(false);
  const [profile, setProfile] = useState(false);
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const ittem = useContext(CreateItem);

  const Globalstate = useContext(CartCoontext);

  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      const filterProduct = ittem.data.filter(
        (ele) =>
          ele.title.toLowerCase().includes(text.toLowerCase()) ||
          ele.description.toLowerCase().includes(text.toLowerCase())
      );

      console.log(filterProduct);
      ittem.updateapidata(filterProduct);
    }, 2000);

    return () => clearTimeout(timer);
  }, [text]);

  //Step-2
  const localData = JSON.parse(localStorage.getItem("user") || null);
  // console.log(localData)
  function valuee(e) {
    if (e.target.value) {
      setShow("block");
    } else {
      setShow("none");
    }
  }

  function store() {
    setPlaystore(!playstore);
  }

  function openLoginbtn() {
    setProfile(!profile);
  }

  function changehandler(e) {
    setText(e.target.value);
  }

  function handleuser() {
    if (localData === null && !user) {
      // localStorage.removeItem("user");
      navigate("/login");
    } else if (localData !== null) {
      localStorage.removeItem("user");
      setProfile(false);
    } else if (user) {
      const signUserOut = async () => {
        await signOut(auth);
      };
      signUserOut();
      setProfile(false);
    }
  }

  function handleCart() {
    navigate("/cart");
  }

  return (
    <div name="home" className="pos">
      <header className="headder">
        <div className="headerLeft">
          <div className="logoContainer">
            <img src={meesho} onClick={() => navigate("/")} alt="" />
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img src={search} alt="logoImage" />
            </div>
            <form action="">
              <input
                type="search"
                value={text}
                onChange={changehandler}
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="inputSearch"
              />
            </form>
            <div className="inputCloseSearch">
              {/* <RxCross2 style={{ display: ` ${show}` }} /> */}
            </div>
          </div>
        </div>

        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={mobile} alt="mobileIcon" />
            </div>
            <p onMouseEnter={store} onMouseLeave={store}>
              Download App
            </p>

            {playstore && (
              <div style={{ display: "block" }}>
                <div className="downloadHoverBtnContainer">
                  <h3>Download From</h3>
                  <a href="#" className="downloadBtn">
                    <img
                      src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                      alt="downloadBtn"
                    />
                  </a>
                  <a href="#" className="downloadBtn">
                    <img
                      src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                      alt="downloadBtn"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="becomeSupplierContainer">
            <p>Become a Supplier</p>
          </div>

          <div className="profileAndCart">
            <div className="profileContainer">
              <div className="profileIcon">
                {user ? (
                  <img
                    style={{ borderRadius: "50%", width: "30px" }}
                    src={user ? user.photoURL : ""}
                    onClick={openLoginbtn}
                    alt="profileIcon"
                  />
                ) : (
                  <AiOutlineUser size={20} />
                )}
              </div>
              <p onClick={openLoginbtn}>Profile</p>

              {profile && (
                <div style={{ display: "block" }}>
                  <div className="profileHoverBtnContainer">
                    <h3>
                      {/* Hello {localData === null ? "User" : localData.name} */}
                      Hello{" "}
                      {user
                        ? user.displayName
                        : localData
                        ? localData.name
                        : "User"}
                    </h3>
                    <h5>
                      {localData !== null
                        ? "Welcome to Meesho"
                        : "Access your account"}
                    </h5>
                    <button onClick={handleuser} className="login_btn">
                      {/* Sign {localData !== null ? "out" : "up"} */}
                      {/* {user ? 'Signout' : 'Sign In'} {!user && <FcGoogle size={25}/>} */}
                      {user
                        ? "Signout"
                        : localData !== null
                        ? "Signout"
                        : "SignIn"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="CartContainer">
              <div className="CartIcon">
                <Badge
                  color="secondary"
                  badgeContent={Globalstate.state.length}
                >
                  <GiShoppingCart size={28} onClick={handleCart} />
                </Badge>
              </div>
              <p>Cart</p>
            </div>
          </div>
        <div className="mobilemenu">
          <div style={{ marginTop: "8px" }} onClick={handleClick}>
            {click ? <RxCross2 /> : <HiOutlineBars3BottomRight />}
          </div>
        </div>
        </div>
      </header>

      <div className={click ? "nav-options active" : "nav-options"}>
       
        <div className="option-three">
          <ul onClick={handleClick}>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/list"}>
              <li>Product</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
