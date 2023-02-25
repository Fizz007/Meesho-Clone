import React, { Children, createContext, useContext, useState } from 'react';
// import withLoader from '../../HOC/withLoader';
import Product from '../Product/Product'
import '../List/List.css'
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";
import CreateItem from '../State/CreateItem';



const List = ({children}) => {
    const api = useContext(CreateItem);
    
    // const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);


    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

  const producturl = () => {
   
      axios.get(url).then((response) => {
        
        // setData(response.data)
           api.updatedata(response.data)
    //    console.log(response.data)
      })

    
  }

    React.useEffect(() => {
        setTimeout(()=> {
            producturl()
            setLoader(true)

        },3000)
    }, [])
     if(!loader){
            return (
                <PacmanLoader

                color="rgb(244, 51, 151)"
                cssOverride={{left: '50%',
                    position: 'absolute',
                    textAlign: 'center',
                    top: '50%'
                }}
                size={45}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              );
        }

    

    return (
        <>
        <div className="each-item-wrapper">
            
            {/* {
                api.data && api.data.map((eachItem, i) => {
                    return (
                    <>
         
                    <Product item={eachItem} key={i} />
                    </>
                    )
                })
            } */}

            {
                api.newdata.length!== 0 ? 
                api.newdata.map((item,id) => {
                    return <Product item={item} key={id} />;
                }) : 
                api.data.map((item,id) => {
                    return <Product item={item} key={id} />;
                }) 

            }
         
        </div>
       
        </>
    )
}

export default List;