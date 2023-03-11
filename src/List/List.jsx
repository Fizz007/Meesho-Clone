import React, { useContext } from 'react';

import Product from '../Product/Product'
import '../List/List.css'
import axios from 'axios';

import CreateItem from '../State/CreateItem';



const List = () => {
    const api = useContext(CreateItem);
    
    // const [data, setData] = useState(null);
   


    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

  const producturl = () => {
   
      axios.get(url).then((response) => {
        
        // setData(response.data)
           api.updatedata(response.data)
    //    console.log(response.data)
      })

    
  }

    React.useEffect(() => {
        
            producturl()
              
    }, [])
    

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
                api.newdata.length !== 0 ? 
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