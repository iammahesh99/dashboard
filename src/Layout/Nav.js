import React,{Component} from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChatIcon from '@material-ui/icons/Chat';
import clsx from 'clsx';
import {
  Route,
  Link, Redirect,  
} from "react-router-dom";
import Home from '../Component/Home';


import Chatbot from '../Component/Chatbot';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


// <p>{props.user.displayName}</p>
// src={props.user.photoURL}



const drawerWidth = 200;

const styles = theme => ({
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:'white',
    fontSize:'large',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {

    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {

    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },



//For Drawer
  drawer: {
    width: drawerWidth,

    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#CD5C5C',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4a4a4a',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

//For Menu button
menuButton: {
    marginRight: theme.spacing(2),
  },
  

//For appbar shift
   appBar: {
    backgroundColor: '#4a4a4a',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },







});

class MiniDrawer extends Component {

   constructor(props) {
    super(props);

  this.state={
      anchorEl:null,
      anchorE2:null,
      notificationAnchorE1:null,
      searching:false,
      searchItemName:null,
      mobileMoreAnchorEl:null,
      role:'StoreAssociate',
      open:false,
      notificationCount:0,
      hit:[]
  };
  
}
 
  

   handleProfileMenuOpen = event => {
    this.setState({anchorEl:event.currentTarget})
  };
   handleMessageMenuOpen = event => {
    this.setState({anchorE2:event.currentTarget})
  };
   handleMessageMenuClose = event => {
    this.setState({anchorE2:null})
  };

  handleNotificationMenuOpen = event => {
    this.setState({notificationAnchorE1:event.currentTarget})
  };
   handleNotificationMenuClose = event => {
    this.setState({notificationAnchorE1:null})
  };


   handleMobileMenuClose = () => {
    this.setState({mobileMoreAnchorEl:null})
  };

 handleMenuClose = () => {
  this.setState({anchorEl:null})
  };

   handleMobileMenuOpen = event => {
    this.setState({mobileMoreAnchorEl:event.currentTarget})
  };



 handleDrawerOpen = () => {

   this.setState({open:true})
  };

   handleDrawerClose = () => {
    console.log("Clicked");
    this.setState({open:false})
  };

 storeView=(e)=>
 {
  console.log('clicked')
  this.setState({searching:!this.state.searching})
  
 }
  
  







   componentDidMount() {
    //this.interval = setInterval(() => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/under_stock.php';
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {

    const Data = resData;

    let a=0;
    
    Data.map(pe => {return a=a+1});
    this.setState({notificationCount:a});
    this.setState({hit:Data});
      });
    }
  //   , 6000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }


 render(){


              const { classes}= this.props;
              const isMenuOpen = Boolean(this.state.anchorEl);
              const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
              const open2 = Boolean(this.state.anchorE2);
              const open3 = Boolean(this.state.notificationAnchorE1);
             
    



              const menuId = 'primary-search-account-menu';
              const renderMenu = (
                <Menu
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  aria-haspopup="true"
                  open={isMenuOpen}
                  onClose={this.handleMenuClose}
                >
                

                  <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>

                  <MenuItem > <button 
                              onClick={this.props.onLogout}>
                              Log Out
                              </button>
                    </MenuItem>
                </Menu>
              );


              const NotificationmenuId = 'primary-notification-account-menu';
              const renderNotification = (
                <Menu
                  anchorEl={this.state.notificationAnchorE1}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={NotificationmenuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  aria-haspopup="true"
                  open={open3}
                  onClose={this.handleNotificationMenuClose}
                >
                
                  {this.state.hit.map(data => {return(
                    <React.Fragment>
                    <MenuItem>
                    <span style={{color:'green',marginRight:'.75em'}}>{data.item}</span>is understock present in <span style={{color:'red',marginLeft:'.75em'}}> {data.self_name}</span>
                    </MenuItem>
                    <hr />
                    </React.Fragment>
                    
                    )})}


                </Menu>
              );



            const MessagemenuId = 'primary-message-account-menu';
              const renderMessage = (
                <Menu
                  anchorE2={this.state.anchorE2}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  id={MessagemenuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                  open={open2}
                  onClose={this.handleMessageMenuClose}
                >
                  <Chatbot />
                </Menu>
              );



              const mobileMenuId = 'primary-search-account-menu-mobile';
              const renderMobileMenu = (
                <Menu
                  anchorEl={this.mobileMoreAnchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={mobileMenuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={isMobileMenuOpen}
                  onClose={this.handleMobileMenuClose}
                >

                <MenuItem onClick={this.handleMessageMenuOpen}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      
                        <ChatIcon />
                      
                    </IconButton>
                    <p>Messages</p>
                  </MenuItem>


                  <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit" aria-haspopup="true">
                      <Badge badgeContent={this.state.notificationCount} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <p>Notifications</p>
                  </MenuItem>

                  <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="primary-search-account-menu"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                  </MenuItem>



                </Menu>

              );
              console.log(this.state.searchItemName);
              console.log(this.state.searching);


  return (
    <div className={classes.grow}>
      <AppBar 
      position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton, this.state.open )}
          >



            <MenuIcon />
          </IconButton>
          <Link to='/' className={classes.title}>
            <HomeTwoToneIcon/>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onClick={this.storeView}
              onKeyDown={this.props.searchItem}
            />
          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {this.state.role=='StoreAssociate'?
          <IconButton aria-label="show 4 new mails"
          onClick={this.handleMessageMenuOpen}
           color="inherit">
              
                <ChatIcon />
              
            </IconButton>:null}
            
            <IconButton 
            aria-label="show 17 new notifications" 
            color="inherit"
            aria-haspopup="true"
            onClick={this.handleNotificationMenuOpen}
            >
              <Badge badgeContent={this.state.notificationCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>{this.props.user.displayName}</p>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              
              <img
                width='32'
                src={this.props.user.photoURL}
                className='avatar circle responsive-img'
                
              />
              
            </IconButton>

            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={this.handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>



          <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={this.state.open}
              
              classes={{
                paper: classes.drawerPaper,
              }}

            >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
           <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider />
        <List>
         
            <ListItem button >
            <Link to="/" style={{ textDecoration: 'none',color:'black'}}>
              <ListItemText primary='Home' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Order" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Order' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Inventory" style={{ textDecoration: 'none',color:'black'}}>
              <ListItemText primary='Inventory' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Shipment" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Shipment' />
              </Link>
              
            </ListItem>
            <ListItem button >
            <Link to="/Report" style={{ textDecoration: 'none',color:'black' }}>
              <ListItemText primary='Report' />
              </Link>
              
            </ListItem>
            
            
          
        </List>
        <Divider />
        
      </Drawer>
      
      {renderMobileMenu}
      {renderMenu}
      {renderMessage}
      {renderNotification}
      
    </div>
  );
}
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiniDrawer);