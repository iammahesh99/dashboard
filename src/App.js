import React, {Fragment,Component}from 'react';
import './App.css';


import SignIn from './Component/SignIn';
import LoginSuccess from './Component/LoginSuccess'
import MiniDrawer from './Layout/Nav.js';


import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
//import Cube from './Demo.js';
//<Demo />
//<Mapshow />


// <Link to="/homepage" style={{ textDecoration: 'none',color:'black'}}
      //  onClick={this.handleClick}>
      // Just Click
      // </Link>

class App extends Component {
 constructor(props) {
    super(props);
    this.state={
      
    }
    
  }

  
  render() 
  {
    
    return (
      <BrowserRouter>
      <div>
      
      <Switch>
      <Route path="/" exact component={LoginSuccess} />
       
       </Switch>
      
      
      </div>
      </BrowserRouter>

      );
  }
}
export default App;
