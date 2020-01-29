import React, { Component } from 'react';
import style from './layout.module.scss';
import {Link, Route} from 'react-router-dom';
import WeatherInput from '../../component/weatherinput';

//import Toolbar from './toolbar/toolbar';

class layout extends Component{
state={
    weathervalue:'',
}
/* 
disdraw=()=>{
    var barshow=this.state.drawbardis;
    this.setState({drawbardis:!barshow})
} */

inputdate=(event)=>{
    this.setState({weathervalue:event.target.value})
}

render(){
//const layout =(props)=>(
    return(
    <>

        <div className={style.App}>
        <header className={style.header}>
          header
          <WeatherInput 
            inputvalue={this.inputdate}
            currentvalue={this.state.weathervalue}
          />
        </header>
        <content className={style.content}>
        content
        <Link to='/'>
          <p className={style.weathernow}>
            weathernow
          </p>
        </Link>
        <Link to='/future'>
          <p className={style.weatherfuture}>
            weatherfuture
          </p>
        </Link>
        <Link to='/fav'>
          <p className={style.weatherfav}>
            weatherfav
          </p>
        </Link>
        </content>
        <section className={style.section}>
        {this.props.children}
            {/* <Route path='/' exact component={ Now } />
            <Route path='/future' component={ Future } /> */}
  
        </section>
        {/* <footer className={style.footer}>
          ff
        </footer> */}
      </div>

    
    </>
    )
}

}

export default layout;