import React from 'react';
//import logo from './logo.svg';
import style from './App.module.scss';
import {Link, Route} from 'react-router-dom';
import Now from '../component/now';
import Future from '../component/future';


function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        header
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
      </content>
      <section className={style.section}>
          <Route path='/' exact component={ Now } />
          <Route path='/future' component={ Future } />

      </section>
      {/* <footer className={style.footer}>
        ff
      </footer> */}
    </div>
  );
}

export default App;
