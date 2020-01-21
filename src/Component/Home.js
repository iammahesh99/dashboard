import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../CssFile/menu.css';
import '../CssFile/Home.css';
import '../CssFile/Shipment.css';
import Chart from '../Data/Chart';
import Self1 from '../Component/Self1';
import Self2 from '../Component/Self2';
import Self3 from '../Component/Self3';
import Self5 from '../Component/Self5';
import StockMonitor from '../Component/StockMonitor';
import ItemMonitor from '../Component/ItemMonitor';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactSimpleCarousel from "react-plain-carousel";
import Frontview from '../Component/Frontview';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Toast from 'light-toast';





      //<img src={require('../Image/corn.jpg')} className={classes.paper} />

     








const styles = theme => ({

  root: {
    textAlign: 'center',
    backgroundColor: '#4a4a4a',
    border: '3px solid #DBCBD8',
    borderRadius: '7px!important'

  },

  root1: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    height:'100%',
    textAlign: 'center',
    backgroundColor: '#4a4a4a',
    border: '3px solid #DBCBD8',
    borderRadius: '7px!important'

  },

  
  
  paper: {
    textAlign: 'center',
    height:'50px',
    color: theme.palette.text.secondary,
  },

papersome: {
    textAlign: 'center',
    

    height:'100px',
    // "&:hover": {
    //       backgroundColor: "green",
    //     },
    color: theme.palette.text.secondary,
  },


  
});



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      shelfname:'',
      carousel: {},
      index: 0,
      open: false,
      open2: false,
      open3: false,
      open5: false,
      hit:[],
      a:null,
      b:null,
      c:null,
      d:null,
      e:null,
      f:null,
      g:null,
    // itemName:this.props.location.state.itemName,
     //itemName:null
      
      
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    
  }



  handleClick=()=>{

    this.state.hit.map(content =>{
                          if(content.self_name==='shelf1')
                          {
                            this.setState({a:'red'});
                          }
                          if(content.self_name==='shelf2')
                          {
                            this.setState({b:'red'});
                          }
                          if(content.self_name==='shelf3')
                          {
                            this.setState({c:'red'});
                          }
                          if(content.self_name==='shelf4')
                          {
                            this.setState({d:'red'});
                          }
                          if(content.self_name==='shelf5')
                          {
                            this.setState({e:'red'});
                          }
                          if(content.self_name==='shelf6')
                          {
                            this.setState({f:'red'});
                          }
                          if(content.self_name==='shelf7')
                          {
                            this.setState({g:'red'});
                          }
                           });





  }






  _onButtonClick(event,index) {
    
    this.setState({
      open: !this.state.open,
      
    });
    this.setState({shelfname:index});

  }
  


next = () => {
    this.state.carousel.next();
  };

  prev = () => {
    this.state.carousel.prev();
  };

  // moveTo = index => () => {
  //   this.state.carousel.moveTo(index);
  // };

  handleMount = carousel => {
    this.setState({ carousel });
  };
  




  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/under_stock.php';
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    
    
    this.setState({hit:resData});
    
    
        
     //const arr=persons.map(pe => {return pe.supplier});

      });
    }
    

  componentWillReceiveProps({itemName}) {
    // console.log({itemName})
    // this.setState({...this.state.itemName,itemName})
    Toast.loading('Searching');
          setTimeout(() => {
            Toast.hide();
          }, 2000);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/searchItem.php?item='+itemName;
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {

      console.log(resData);
      const searchresult=resData;
      searchresult.map(data=>{
        if(data.self_name=='shelf1')
        {
          this.setState({a:'green'})
        }
        if(data.self_name=='shelf2')
        {
          this.setState({b:'green'})
        }
        if(data.self_name=='shelf3')
        {
          this.setState({c:'green'})
        }
        if(data.self_name=='shelf5')
        {
          this.setState({e:'green'})
        }


      })
     
        
      })








  }





  
render(){
  const { classes}= this.props;
  console.log(this.state.itemName)
  
  console.log(this.state.hit);
  
  return (
<React.Fragment>
<div style={{display:'table',width:'100%',marginTop:'6%'}}>
<div style={{display:'table-row'}}>
            <div style={{display:'table-cell',width:'45%',}}>
        
            <div className={classes.root} >
                
              <h2> TopView of Store1</h2>
               <Grid >
                     
                              <Grid container spacing={5}>
                              <Grid item xs={5}>      
                                  </Grid>
                                <Grid item xs={2} >
                                 
                                    <Paper  style={{ backgroundColor: this.state.a}}  
                                    className={classes.papersome} 
                                    selected={this.state.name === 'Shelf1'}
                                    onClick={event => this._onButtonClick(event, 'Shelf1')}>Shelf1</Paper>
                                    
             
                                 </Grid>
                                  
                                  <Grid item xs={3}>

                                    <Paper style={{ backgroundColor: this.state.b}}  
                                    className={classes.paper} 
                                    selected={this.state.name === 'Shelf2'}
                                    onClick={event => this._onButtonClick(event, 'Shelf2')}>Shelf2</Paper>
                                    
                                    
                                      </Grid>
                            </Grid>

                           <Grid container spacing={5}>
                              <Grid item xs={2}>
                              
                                    <Paper style={{ backgroundColor: this.state.c}} 
                                    className={classes.papersome} 
                                    selected={this.state.name === 'Shelf3'}
                                    onClick={event => this._onButtonClick(event, 'Shelf3')}>Shelf3</Paper>
                                  
                                     
                              </Grid>
                              <Grid item xs={3}>
                                    
                                    <Paper style={{ backgroundColor: this.state.d}}  
                                    className={classes.paper}
                                    selected={this.state.name === 'Shelf4'}
                                    onClick={event => this._onButtonClick(event, 'Shelf4')}
                                    >Shelf4</Paper>
                                   
                              </Grid>
                              <Grid item xs={2}>
                                    
                                    <Paper  style={{ backgroundColor: this.state.e}}  
                                    className={classes.papersome} 
                                    selected={this.state.name === 'Shelf5'}
                                    onClick={event => this._onButtonClick(event, 'Shelf5')}>Shelf5</Paper>
                                    
                              </Grid>
                              
                          </Grid>

                          <Grid container spacing={5}>
                              <Grid item xs={5}>
                              
                                    <Paper style={{ backgroundColor: this.state.f}} className={classes.paper}>Shelf6</Paper>
                                  
                                     
                              </Grid>
                              <Grid item xs={3}>
                                    
                                    <Paper  style={{ backgroundColor: this.state.g}}  className={classes.paper}>Shelf7</Paper>
                                   
                              </Grid>
                              <Grid item xs={4}>
                                    
                                    <Paper className={classes.paper}>Shelf8</Paper>
                                    
                              </Grid>
                              
                          </Grid>


                      </Grid>
                         
                </div>
                </div>

  <div style={{display:'table-cell',width:'50%',}} >


    {this.state.open ? <Frontview  understock={this.state.hit}  shelfname={this.state.shelfname}/> :null   }
    
    
                                          
    </div>
 </div>
 </div>

<div className={classes.root1}>
<Grid>
<Grid container style={{marginTop:'1%'}}>
<Grid item xs={.8} style={{paddingTop:'1%'}}>
    <IconButton onClick={this.prev}
      style={{color:'white'}}
      >
              <ArrowBackIosIcon />
    </IconButton>
</Grid>
<Grid item xs={11}>

    <ReactSimpleCarousel
                isInfinity
                className="carousel2"
                onMount={this.handleMount}
              >
              
              <div>
              <StockMonitor delevent={this.handleClick} />
              </div>
              <div>
              <ItemMonitor delevent={this.handleClick} />
              </div>
               
      </ReactSimpleCarousel>
  
  </Grid>
  <Grid item xs={.8} style={{paddingTop:'1%'}}>
        <IconButton onClick={this.next}
        style={{color:'white'}}
        >
                <ArrowForwardIosIcon />
      </IconButton>

</Grid>
</Grid>
</Grid>
    
</div>



</React.Fragment>
  );
}
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
