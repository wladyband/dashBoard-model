
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import Login from './views/login'
import './views/css/custom.css'
import RegisterUser from "./views/register-user/registerUser";

class App extends React.Component {
 render(){
  return  (
    <div>
      <RegisterUser/>
    </div>
  )
 }
}

export default App;
