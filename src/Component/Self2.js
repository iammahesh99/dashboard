import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import Understockitemdetail from '../Component/Understockitemdetail';
import {Link} from 'react-router-dom';


import '../CssFile/menu.css';
const styles = theme => ({
  
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
   	  height:'120px',
    backgroundColor:'black'
  },
   paper1: {
    height:'100%',
    display:'inline-block',
    width:'25%',
   	
  },
  paper3: {
   
    height:'31%',
    display:'inline-block',
    width:'30%',
    
    
  },

  
});

class Self2 extends Component {

   constructor(props) {
    super(props);
    this.state = {
      anchorEl:null,
      understock:props.understock,
      a:false,
      b:false,
      c:false,
      d:false,
      e:false,
      f:false,
      g:false,
      name:'hello',
      
    };
     this.handleClick= this.handleClick.bind(this);
     this.handleClose= this.handleClose.bind(this);
}

   handleClick = (event,index) => {
    this.setState({anchorEl:event.currentTarget});
    this.setState({name:index});
    //this.setState({name:event.index});
    
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  componentDidMount(){
    this.state.understock.map(data=>{
       if(data.item==='dove' & data.self_name==='shelf2')
              {
                 this.setState({a:true});
               }
        if(data.item==='headshoulder' & data.self_name==='shelf2')
              {
                 this.setState({b:true});
               }
        if(data.item==='loreal' & data.self_name==='shelf2')
              {
                 this.setState({c:true});
               }
        if(data.item==='pears' & data.self_name==='shelf2')
              {
                 this.setState({d:true});
               }
        if(data.item==='rin' & data.self_name==='shelf2')
              {
                 this.setState({e:true});
               }
        if(data.item==='surfexcel' & data.self_name==='shelf2')
              {
                 this.setState({f:true});
               }
        if(data.item==='tide' & data.self_name==='shelf2')
              {
                 this.setState({g:true});
               }


    });
    console.log(this.state.a);
  }

 

render(){
	 const open = Boolean(this.state.anchorEl);
 	 const id = open ? 'simple-popover' : undefined;
 	 const { classes}= this.props;
 	 
  return (
    <div className="menu1">
      <h2 className="header">Shoaps And Detergent</h2>
      <hr style={{border:'5px solid #000000'}}/>
      <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.a? 'red': null}}
              selected={this.state.name === 'dove'}
              onClick={event => this.handleClick(event, 'dove')}>

               {function() {
                let row=[];
                for (var i = 0; i<9; i++) {
                  row.push(<img src={require('../Image/self2/dove.png')} className={classes.paper3} key={i} 
                   title="Remaining item is 11"  aria-label="add"/>)
                }
                return row;
              } ()}

              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.b? 'red': null}}>
              <img src={require('../Image/self2/headshoulder.png')} className={classes.paper1} 
              title="Remaining item is 24"  aria-label="add" 
              />
              <img src={require('../Image/self2/headshoulder.png')} className={classes.paper1} 
              title="Remaining item is 24"  aria-label="add"             
              />
              <img src={require('../Image/self2/headshoulder.png')} className={classes.paper1} 
              title="Remaining item is 24"  aria-label="add"             
              />
              <img src={require('../Image/self2/headshoulder.png')} className={classes.paper1} 
              title="Remaining item is 24"  aria-label="add"             
              />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.c? 'red': null}}>
              {function() {
                let row=[];
                for (var i = 0; i<9; i++) {
                  row.push(<img src={require('../Image/self2/loreal.png')} className={classes.paper3} key={i} 
                     title="Remaining item is 15"  aria-label="add"/>)
                }
                return row;
              } ()}
              
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.d? 'red': null}}>
              {function() {
                let row=[];
                for (var i = 0; i<9; i++) {
                  row.push(<img src={require('../Image/self2/pears.png')} className={classes.paper3} key={i} 
                   title="Remaining item is 24"  aria-label="add" />)
                }
                return row;
              } ()}
              
              </Paper>
            </Grid>
      </Grid>
      <hr style={{border:'5px solid #000000'}}/>
        <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.e? 'red': null}}>
              <img src={require('../Image/self2/rin.png')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              <img src={require('../Image/self2/rin.png')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              <img src={require('../Image/self2/rin.png')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              <img src={require('../Image/self2/rin.png')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.f? 'red': null}}>
              <img src={require('../Image/self2/surfexcel.png')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              <img src={require('../Image/self2/surfexcel.png')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              <img src={require('../Image/self2/surfexcel.png')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              <img src={require('../Image/self2/surfexcel.png')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.g? 'red': null}}
                selected={this.state.name === 'tide'}
              onClick={event => this.handleClick(event, 'tide')}>
              <img src={require('../Image/self2/tide.png')} className={classes.paper1}             
              title="Remaining item is 91"  aria-label="add"/>
               <img src={require('../Image/self2/tide.png')} className={classes.paper1}             
              title="Remaining item is 91"  aria-label="add"/>
               <img src={require('../Image/self2/tide.png')} className={classes.paper1}             
              title="Remaining item is 91"  aria-label="add"/>
               <img src={require('../Image/self2/tide.png')} className={classes.paper1}             
              title="Remaining item is 91"  aria-label="add"/>
              </Paper>
            </Grid>
        </Grid>
      


      <Popover
        id={id}
        open={open}
        anchorEl={this.state.anchorEl}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
       {this.state.understock.map(item2 =>
        {
          if(item2.item==this.state.name)
          {
            return <Typography style={{float:'left'}}>
             {this.state.name} --Current_SOH - {item2.SOH}, Predictable_SOH--{item2.predict_item}
            </Typography>
          }

        }
        )}
        
        <Understockitemdetail itemname={this.state.name} />
        <button style={{backgroundColor:'red'}} onClick={this.handleClose}>Close</button>
        <Link
        to={{
            pathname: '/SingleItemDetail',
            state: { item: this.state.name }
        }}
        style={{backgroundColor:'green',marginLeft:'65%',textDecoration: 'none',color:'black'}} 
        >
                Show Details
        </Link>
        
      </Popover>

      
    </div>
  );
  }
}
Self2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Self2);