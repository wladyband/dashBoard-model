
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

import './views/css/custom.css'
import RegisterUser from "./views/user/registerUser";
import Navbar from "./views/components/navbar";
import CreatingConstruction from "./views/construction/creatingPrimaryConstruction";
import CreatingSecondaryConstruction from "./views/construction/creatingSecondaryConstruction";

class App extends React.Component {
 render(){
  return  (
    <>
    <Navbar/>
      <div>
        <CreatingSecondaryConstruction/>
      </div>
    </>
  )
 }
}

export default App;
