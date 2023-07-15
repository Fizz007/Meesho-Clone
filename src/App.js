import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Login from "./Login/Login";
import { ToastContainer } from "react-toastify";
// import Footer from "./component/Footer/Footer";
import Cart from "./component/Cart/Cart";
import SetItem from "./State/SetItem";
import Signup from "./Login/Signup";
import Productpage from "./Pages/Productpage";
import Address from "./component/Address/Address";
import Payment from "./component/Payment/Payment";
import Summary from "./component/Summary/Summary";

function App() {
  return (
    <SetItem>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productpage/:id" element={<Productpage />} />
        <Route path="/address" element={<Address/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     
    </BrowserRouter>
    </SetItem>
  );
}

export default App;
