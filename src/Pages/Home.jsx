import { createContext, useState } from "react";
import Navigationbar from "../component/Navigationbar";
import Categories from "../component/Categories";

import Header from "../component/Header";

import Slider from "../component/Slider";
import List from "../List/List";
import Login from "../Login/Login";
import SetItem from "../State/SetItem";
import Signup from "../Login/Signup";
import Slidder from "../component/Slidder/Slidder";



const Home = () => {
  // const [userData, setUserData] = useState(
  //   localStorage.getItem("user") || null
  // );


  return (
   
    <>
    <SetItem>
       
          <Header />
          <Navigationbar />
          <Slidder/>
          {/* <Slider /> */}
          <Categories />
          <List />       

    
    
   
        </SetItem>
        </> 
      


 
  );
};

export default Home;
