
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react';
import Login from "./views/login";
import './views/css/custom.css'

class App extends React.Component {
 render(){
  return  (
    <div>
      <Login/>
    </div>
  )
 }
}

export default App;
