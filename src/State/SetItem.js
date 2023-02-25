import React, { useState } from "react";
import CreateItem from "./CreateItem";

function SetItem(props) {
  // const [name, setName] = useState("faiz");
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);

  function updateapidata(data) {
    setNewData(data);
  }

  function updatedata(data){
    setData(data)
  }

  

  return (
    <CreateItem.Provider value={{ newdata, updateapidata , updatedata , data}}>
      {props.children}
    </CreateItem.Provider>
  );
}

export default SetItem;