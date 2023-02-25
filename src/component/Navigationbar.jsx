import React from 'react'

import bagsfootwear from '../data/BagsFootwear.js'
import beautyhealth from '../data/BeautyHealth.js'
import electronic from '../data/Electronic.js'
import homeandkitchen from '../data/HomeAndKitchen.js'
import kids from '../data/Kids.js'
import jewelleryaccessories from '../data/JewelleryAccessories.js'
import men from '../data/Men.js'
import womenethnic from '../data/WomenEthnic.js'
import womenwestern from '../data/WomenWestern.js'


const Navigationbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>Women Ethnic
                <div className="subMenu">
                    <div id="womenEthic" className="submenuList">
                   {/* {  womenethnic.map((e)=> {
                        let list = "";
                    list = e.data.map((element)=> `<p>${element}</p>` ).join(" ")           
                                                        
                     return   `  <div className='column'>
                                        <h4>${e.heading}</h4>
                                        ${list}
                                  </div>
                              
                              `
                                                        


                    })} */}

                    {womenethnic.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>

              
            </li>
            <li>Women Western
                <div className="subMenu">
                    <div id="womenWestern" className="submenuList">
                    {womenwestern.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>

                </div>
            </li>
            <li>Men
                <div className="subMenu">
                    <div id="men" className="submenuList">
                    {men.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Kids
                <div className="subMenu">
                    <div id="kids" className="submenuList">
                    {kids.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Home & Kitchen
                <div className="subMenu">
                    <div id="HomeAndKitchen" className="submenuList">
                    {homeandkitchen.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Beauty & Health
                <div className="subMenu">
                    <div id="beautyAndHealth" className="submenuList">
                    {beautyhealth.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Jewellery & Accessories
                <div className="subMenu">
                    <div id="JewelleryAndAccessories" className="submenuList">
                    {jewelleryaccessories.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Bags & Footwear
                <div className="subMenu">
                    <div id="BagsFootWarId" className="submenuList">
                    {bagsfootwear.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
            <li>Electronics
                <div className="subMenu">
                    <div id="ElectronicsId" className="submenuList">
                    {electronic.map((e,i)=> {
                          return <>
                             <div className='column' key={i}>
                                        <h4>{e.heading}</h4>
                                        
                                            <p>{e.data.map((element)=> {
                                                return <p>{element}</p>
                                            })}</p>
                                  </div>
                         </>
                    })}
                    </div>
                </div>
            </li>
        </ul>

    </nav>
    </div>
  )
}

export default Navigationbar
