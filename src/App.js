
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@popperjs/core';
import 'react-chartjs-2'
import 'chart.js/auto'
import React from 'react';
import './views/css/custom.css'
import Navbar from "./views/components/navbar";

import ContactReport from "./views/report/contactReport";

class App extends React.Component {
 render(){
  return  (
    <>
    <Navbar/>
      <div>
        <ContactReport/>
      </div>
    </>
  )
 }
}

export default App;
