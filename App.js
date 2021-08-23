import React, {Fragment,Component}from 'react';
import './App.css';


import SignIn from './Component/SignIn';

import MiniDrawer from './Layout/Nav.js';
import Home from './Component/Home';
import Grid from '@material-ui/core/Grid';
import LoginSuccess from './Component/LoginSuccess'


import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
//import Cube from './Demo.js';
//<Demo />
//<Mapshow />

// <div style={{overflow: 'hidden'}}>
//       <Grid>
//       <Grid container>
//       <Grid item xs={7} style={{height:'667px'}}>
//       <img src={require('./Image/side.jpg') } style={{
//       width:'100%',
//       height:'100%',
//       filter:'opacity(10%)',}} />
//       </Grid>
//       <Grid item xs={5} style={{backgroundColor:'#FFFAFA',height:'667px'}}>
//       <p style={{
//         width:'150px',marginTop:'27%',marginLeft:'35%',fontSize:'30px'}}>SignIn</p>
//        <img src={require('./Image/loginlogo1.png') } style={{width:'150px',marginLeft:'35%'}} />
//       <div style={{width:'100%',marginTop:'5%',marginLeft:'20%'}}>
//       </div>
//       </Grid>
//       </Grid>
//       </Grid>
      
//       </div>

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
          <Route path="/" ><LoginSuccess
            onLogout={this.handleLogout}
            user={"mahesh Pandey"}
            userType={"admin"}
          /></Route>
      </Switch>
      </div>
      </BrowserRouter>

      );
  }
}
export default App;
