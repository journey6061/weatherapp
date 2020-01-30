import React, { Component } from 'react';
import style from './layout.module.scss';
import {Link, Route} from 'react-router-dom';
import WeatherInput from '../../component/weatherinput/weatherinput';
import Now from '../../component/now/now';
import Future from '../../component/future/future';
import Fav from '../../component/fav/fav';
import axios from 'axios'

//import Toolbar from './toolbar/toolbar';

class layout extends Component{
state={
    weathervalue:'',
    error:false
}
/* 
disdraw=()=>{
    var barshow=this.state.drawbardis;
    this.setState({drawbardis:!barshow})
} */
componentDidMount(){
  var testdata=this.state.weathervalue;

  var location='07310'

		axios.get('https://api.geocod.io/v1.4/geocode',{
			params:{
				q:location,
				api_key:'25de1572225915e7eee55d929d76e4e65e61e62'
			}
		})
		.then(function(res){

			console.log(testdata);
			var result=res.data.results[0].formatted_address;
			console.log(result);
			//document.getElementById('test').innerText=result;

		})
		/* .catch(function(err){
      console.log(err);
      this.setState({error: true});
    }) */
    .catch(error => {
      // console.log(error);
      this.setState({error: true});
  });

}

inputdate=(event)=>{
    this.setState({weathervalue:event.target.value})
}

render(){
    
    let weathercontent = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      weathercontent=
             <>
           <Route 
            path='/' exact render={props=>
              <Now {...props} 
              column={this.state.weathervalue}
              />}
             />
            <Route path='/future' exact component={ Future } />
            <Route path='/fav' component={ Fav } />
            </>
            
    }


    const newBugs = this.props.bugs;
    
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
            {weathercontent}
            
  
        </section>
        

        <input 
        
        value={this.state.weathervalue} 
        onChange={this.inputdate}

        
        />
        <div>{this.state.weathervalue}</div>
       
        {newBugs}
        
        <p>test</p>
      </div>

    
    </>
    )
}

}

export default layout;