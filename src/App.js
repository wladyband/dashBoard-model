
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Login from './views/login'
import './views/css/custom.css'
import RegisterUser from "./views/register-user/registerUser";
import Navbar from "./views/components/navbar";

class App extends React.Component {
 render(){
  return  (
    <>
    <Navbar/>
      <div>
        <RegisterUser/>
      </div>
    </>
  )
 }
}

export default App;
