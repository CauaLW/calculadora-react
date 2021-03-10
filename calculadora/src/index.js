import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Calculator from './main/Calculator'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);