import React, { Component, useEffect } from 'react';
import './App.css';


import NavBar from '../../UiComponent/NavBar/NavBar';
import Container from '../Container/Container';
import Filter from '../../UiComponent/FilterBar/Filter';
import Search from '../../UiComponent/Search/Search';

 class App extends Component {


    renderNavbar() {
      return <NavBar></NavBar>;
    }
    renderSearch() {
        return <Search></Search>
    }
    renderFilter() {
        return <Filter></Filter>
    }
    renderContainer() {
        return <Container></Container>
    }
    

render() {
    return (
     <div>
     {this.renderNavbar()}
     {this.renderSearch()}
     {this.renderFilter()}   
     {this.renderContainer()}
     </div>
      );

  }
}
  
export default App;