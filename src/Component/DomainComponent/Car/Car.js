import React from 'react'
import './Car.css'

const Car = (props) => {
    return (
      
                <div className="col-sm-12 car-card ">
                   
                       {/* <img width="200" height="" src="https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?cs=srgb&dl=pexels-julio-nery-1687147.jpg&fm=jpg"/>      */}
                      {/* <h1>Latest Car deals</h1> */}
                       <div className = "row justify-content-center align-content-center inner-card">

                        <div className="img-product col-sm-4">
                        <img width="330" height="" src="https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?cs=srgb&dl=pexels-julio-nery-1687147.jpg&fm=jpg"/>
                        <div className="row  mx-auto p-1ggf"> 
                        <div className="col-3"><i className="fi-xnsuxl-instagram"></i> </div>
                        <div className="col-3"><i className="fi-xnluxl-user"></i> </div>
                        <div className="col-3"> <i className="fi-xnsuxl-gear"></i></div>
                        <div className="col-3"> 3</div>                        
                         </div>
                        </div>
                       
                        <div className="img-product col-sm-5 ">
                      <p className = "title-product">  Amazing Mercedis  Benz</p>
                     
                     <div className="font-weight-light"> <p>2019 , Model</p>
                      <p>Insert lorem and press the tab key, this will insert a 
                          Lorem Ipsum paragraph. </p>
                      </div>
                        <button className="btn btn-md warning-color text-white">View Deal</button>
                        </div>
                        <div className = "col-sm-auto  " >
                            <div className = "price "><h2 className="text-warning">12$</h2><p>per day</p></div>
                        </div>

                       </div> 

                   

                </div>
 
    )
}

export default Car


