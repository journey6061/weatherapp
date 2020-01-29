import React, {Component} from 'react';
//import logo from './logo.svg';
import style from './App.module.scss';
import {Link, Route} from 'react-router-dom';
import Layout from '../component/layout'
import Now from '../component/now';
import Future from '../component/future';
import Fav from '../component/fav';


class App extends Component{
  
  render(){
    return (
      
      <Layout>

      
            <Route path='/' exact component={ Now } weatherValue={this.props.weathervalue}/>
            <Route path='/future' component={ Future } />
            <Route path='/fav' component={ Fav } />
  

      </Layout>
    );
  }
  
}


export default App;
