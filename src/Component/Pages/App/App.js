import React, { Component, useEffect } from 'react';
import './App.css';
import Container from '../Container/Container';
import HomeLoader from '../../UiComponent/Loader/HomeLoader';

 class App extends Component {

    constructor(props) {
            super(props);
    this.state={
        isPreRender:true
    };

    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({isPreRender:false})
    }, 1000);
        
    }
   

    
    renderLoader() {
        return <HomeLoader></HomeLoader>
    }

    renderContainer() {
        return <Container></Container>
    }
   
    

render() {

    return (

    <div>
       { !this.state.isPreRender ? this.renderContainer():this.renderLoader()}
        </div>   
      );
  }
}
  
export default App;