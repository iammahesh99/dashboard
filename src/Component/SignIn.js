import React, { Component } from 'react'
import firebase from 'firebase'
import LoginSuccess from '../Component/LoginSuccess'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Toast from 'light-toast';

// componentWillMount () {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user })
//     })
//   }




class SignIn extends Component {
  constructor () {
    super()
    this.state = {
    user: null,
    authUser:null
    
    
  };
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  

  
  }
  

   

  
  handleAuth (e) {
    e.preventDefault();
    
    

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
        prompt: 'select_account'
      });
     
 
    firebase.auth().signInWithPopup(provider) 
    .then((result) => {
      this.setState({authUser:result.user});

      Toast.loading('loading');
          setTimeout(() => {
            Toast.hide();
          }, 3000);



      const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/store_login.php?email='+result.user.email;
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;
        this.setState({user:resData})
        
     //const arr=persons.map(pe => {return pe.supplier});
  
        
      });
      
    });


    


  }

 handleLogout () {
    this.setState({user:null})
  }

  renderMessages () {
    if (this.state.user) {
    if(this.state.user==='fail')
    {
      Toast.fail('You are Not Authorised Contact to admin');
      this.setState({user:null})
      return <div style={{marginTop:'20%',marginLeft:'37%'}}>
      
      <button style={{width:'350px',
      fontSize: '32px',
      backgroundColor:'white'
      }}
    
      onClick={this.handleAuth}><img width='38'
      style={{float: 'left'}}
      

      src={require('../Image/Google-icon.jpg')}  />
      Login with Google</button>
          </div>

    }else{
      localStorage.setItem('email',this.state.authUser.email);
      
      return (<div>
        <LoginSuccess
        onLogout={this.handleLogout}
        user={this.state.authUser}
        />
        </div>)}
    }
    

    else {
      return <div style={{marginTop:'20%',marginLeft:'37%'}}>
      
      <button style={{width:'350px',
      fontSize: '32px',
      backgroundColor:'white'
      }}
    
      onClick={this.handleAuth}><img width='38'
      style={{float: 'left'}}
      

      src={require('../Image/Google-icon.jpg')}  />
      Login with Google</button>
          </div>
    }
  }

  render () {
    console.log(this.state.user)

    return (
      <div>
        
        
        <div>
          
          {this.renderMessages()}
        </div>
      </div>
    )
  }
}

export default SignIn;
