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
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



import '../CssFile/menu.css';
const styles = theme => ({
   root: {
    backgroundColor: '#4a4a4a',
    border: '3px solid #DBCBD8',
    borderRadius: '7px!important',
    marginLeft:'2%'

  },
  
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
   	height:'140px',
   	marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
   paper1: {
    width:'80%',
   	height:'100%',
   	
  },

  
});

class Self4 extends Component {

   constructor(props) {
    super(props);
    this.state = {
      understock:props.understock,
      hit:[],
      data1:[]
      
    };
}

   
  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='http://maheshpandey9919.000webhostapp.com/newproject/services/services/self_view.php?selfName=self4';
    const uri2='https://maheshpandey9919.000webhostapp.com/newproject/services/services/selfDetail.php?self_name=self4'
    //console.log(uri)

      Promise.all([
            fetch(proxyurl+uri,{ method: 'GET', }),
            fetch(proxyurl+uri2,{ method: 'GET', }),
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([resdata1, resdata2,]) => 
          this.setState({
            data1:resdata1,
            hit: resdata2,
        }));
        


    

  }
  
     

  

 

render(){
   const { classes}= this.props;
   let selfWidth=0
   let selfRow=0
   this.state.data1.map(pe=>{
          selfWidth=pe.width/2+"%";
          selfRow=pe.NoOfRows

        })

   console.log(selfWidth);
   console.log(selfRow);

    let rows = [];
    for (var i = 1; i <=selfRow; i++){
      let rowID = `row${i}`
      
      let col=[]
      this.state.hit.map(data=>{
        if(data.rowName==i){
          const img=data.itemName
          const link="https://maheshpandey9919.000webhostapp.com/newproject/services/services/uploadimage/self4/"+img+".jpg"
          console.log(link)
          col.push(<div style={{height:'90px',display:'table-cell',backgroundColor:'black'}} title={data.itemName}>
           {function() {
                let cell=[];
                for (var i = 0; i<data.quantity; i++) {
                  cell.push(<img src={link} 
                    style={{display:'inline-block',height:'80px',marginTop:'10px',marginLeft:'3px'}} 
                    key={i}/>)
                }
                return cell;
              } ()}

          </div>)
          
        }}
        )
      
      rows.push(<div>
        

        <div style={{backgroundColor:'black'}}key={i} id={rowID} >{col}</div>
        <hr style={{border:' #4a4a4a'}}/>

        </div>)
    }

  
    

   
    
	 
  return (
    <div 
   className={classes.root} 
    style={{width:selfWidth}}>
      <h2 className="header" style={{color:'white'}}>Healthy Products</h2>
                 {rows}
    </div>
  );
  }
}
Self4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Self4);