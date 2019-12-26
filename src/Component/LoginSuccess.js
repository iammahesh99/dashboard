import React, {Fragment,Component}from 'react';
import MiniDrawer from '../Layout/Nav.js';
import Order from '../Component/Order.js';
import Inventory from '../Component/Inventory';
import Home from '../Component/Home';
import Shipment from '../Component/Shipment';
import Mapshow from '../Component/Map';
import Report from '../Component/Report';
import FirstScreen from '../Component/FirstScreen';
import SingleItemDetail from '../Component/SingleItemDetail';





import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Cube from './Demo.js';
//<Demo />
//<Mapshow />
// <Route path="/StoreView"><Home itemName={this.state.searchItemName}/></Route >

class LoginSuccess extends Component {
 constructor(props) {
    super(props);
    this.state={
      onLogout:props.onLogout,
      user:props.user,
      userType:props.userType,
      searchItemName:null,
      name:false
      

    };
   // this.searchItem=this.searchItem.bind(this);

    
  }
  searchItem=(e) =>{

    if(e.keyCode===13)
    {
         //console.log('clicked')
      // console.log('enterd')
        //this.setState({searching:!this.state.searching})  
       this.setState({searchItemName:e.target.value})
    }
    
    //this.setState({searchItemName:e.target.value})

  }
  

  
  render() 
  {
    

    // const show=this.state.userType.map(data => {
    //   if(data.role==="storeassociate")
    //   {

    //   return <Home itemName={this.state.searchItemName}/>
    //   }
    //   else if(data.role==="storemanager")
    //   {
    //   return <FirstScreen/>
    //   }
    // })
    // console.log(this.state.userType)


    
    return (
      <BrowserRouter>
      <div>
     
     <MiniDrawer
     onLogout={this.state.onLogout}
     user={this.state.user}
     searchItem={this.searchItem}

     />
     
       <Switch>
          <Route path="/" exact ><Home itemName={this.state.searchItemName}/></Route>
          <Route path="/Order"  component={Order} />
          <Route path="/Inventory" component={Inventory} />  
          <Route path="/Shipment" component={Shipment} />
          <Route path="/Report" component={Report} />
          <Route path="/SingleItemDetail" component={SingleItemDetail} />
          

        </Switch>

      
      </div>
      </BrowserRouter>

      );
  }
}
export default LoginSuccess;
