import React, {Component} from 'react';
//import logo from './logo.svg';
import style from './App.module.scss';
import {Link, Route} from 'react-router-dom';
import Layout from './layout/layout'
import Now from '../component/now/now';
import Future from '../component/future/future';
import Fav from '../component/fav/fav';


class App extends Component{

  state = {
    weathertest: 'ttt',
    sex:'ooo'
  }
  
  handleSelect= (event)=> {
    this.setState({sex: event.target.value});
}


  render(){
    //console.log(this.props)
    return (
      
      <Layout bugs={this.state.weathertest} handleSelect={this.handleSelect.bind(this)}>

      
            {/* <Route path='/' exact component={ Now } render={props=>
            <Now {...props} 
            column={this.state.weathervalue}
            />}/> */}

            {/* <Route path='/' exact render={props=>
            <Now  
            {...props}
            weather={this.state.weathervalue}
            />}/>  */}
            

{/*             userName={this.state.username}
 */}  
            {<input 
       
        value={this.state.sex} 
        onChange={this.handleSelect}

        
        />}
      </Layout>
    );
  }
  
}


export default App;
