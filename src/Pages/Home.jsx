import { createContext, useState } from "react";
import Navigationbar from "../component/Navigationbar";
import Categories from "../component/Categories";

import Header from "../component/Header";


import List from "../List/List";

import SetItem from "../State/SetItem";

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
        
          <Categories />
          <List />       

    
    
   
        </SetItem>
        </> 
      


 
  );
};

export default Home;
