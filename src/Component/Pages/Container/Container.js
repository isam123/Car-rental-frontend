
import React, {  useState,Component } from 'react'
import Car from '../../DomainComponent/Car/Car'
import Filter from '../../UiComponent/FilterBar/Filter';
import Search from '../../UiComponent/Search/Search';
import Footer from '../../UiComponent/Footer/Footer';
import NavBar from '../../UiComponent/NavBar/NavBar';

const Container = () =>  {

    const [cars, setCars] = useState(true)
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


    function renderCar(index) {

        return  <Car key={index}></Car>;
    }

    function renderNavbar() {
        return <NavBar></NavBar>;
      }
      function renderSearch() {
          return <Search></Search>
      }
      function renderFilter() {
          return <Filter></Filter>
      }
    
      function  renderFooter() {
          return <Footer></Footer>
      }
      
  
    return (
        <div>

        {renderNavbar()}
        {renderSearch()}
        {renderFilter()}   
     <div className="row mx-auto w-75 mt-4 ">
              {
                  [1,2,3,4,5,6].map((item,index) => {
                return  renderCar(index)
            })
             
              }
            
           </div>
        {renderFooter()}

     </div>
           
        )
    
}
 export default Container;