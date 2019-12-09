import React,{Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';import '../CssFile/Shipment.css';
import '../CssFile/Shipment.css';
import '../CssFile/menu.css';
import {Line} from 'react-chartjs-2';



import {
  Route,
  Link
} from "react-router-dom";
//item:this.props.location.state.item,



class SingleItemDetail extends Component {
 constructor(props) {
    super(props);
    this.state={
    	item:this.props.location.state.item,
    	
    	chartData: {},
    	
      
    }
    
  }



  componentDidMount() {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/adminlist.php';
		//console.log(uri)

    	fetch(proxyurl+uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {

    	console.log(resData);
    	// const persons = resData.results;

		//console.log(persons);
		//const arr2=persons.map(pe => {return pe.supplierName});
		
      	
 		 //const arr=persons.map(pe => {return pe.supplier});
 		 //console.log(arr);
        this.setState({
         chartData:{
				labels:['Day1','Day2','Day3','Day4','Day5','Day6','Day7'],
				datasets:[
							{
								label:'Monitory Loss',
								data:[280,400,500,80,560,340,580],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									
								],		

							}
				
				          ]


						}
		});
      })
  	}






  
  render() 
  {
  	console.log(this.state.item);
    
    return (
   <div>
   <div style={{marginTop:'5%',color:'white'}}>
   <h3>Item - <span>{this.state.item}</span></h3>
   </div>
   <div style={{width:'70%',backgroundColor:'#4a4a4a'}} >
			    <Line 
				 data={this.state.chartData}
				 width={80}
  				 height={18}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "white",
							                
							            }
						 	},
						 	scales: {
						            yAxes: [{
						                ticks: {
						                    fontColor: "white",
						                    beginAtZero: true
						                }
						            }],
						            xAxes: [{
						                ticks: {
						                    fontColor: "white",
						                    beginAtZero: true
						                }
						            }]
		        				}
						 
						 }
					}
				 /> 
			    
			  </div>
			  

      
      <div className="table_menu" style={{marginTop:'10px'}} >
      <Paper>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell align="center" className="table_head">Item Count</TableCell>
             <TableCell align="center" className="table_head">Day1</TableCell>
            <TableCell align="center" className="table_head">Day2</TableCell>
            <TableCell align="center" className="table_head">Day2</TableCell>
            <TableCell align="center" className="table_head">Day4</TableCell>
            <TableCell align="center" className="table_head">Day5</TableCell>
            <TableCell align="center" className="table_head">Day6</TableCell>
            <TableCell align="center" className="table_head">Day7</TableCell>
            <TableCell align="center" className="table_head">Week2</TableCell>
            <TableCell align="center" className="table_head">Week3</TableCell>
        
          </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
              <TableCell align="center" className="table_head">
                Actual StockOnHand
              </TableCell>
              <TableCell align="center" className="table_column">
              11
              </TableCell>
              <TableCell align="center" className="table_column">
             	--
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>  
               <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              
            </TableRow>

            <TableRow>
            <TableCell align="center" className="table_head">
                Demand
              </TableCell>
              <TableCell align="center" className="table_column">
              40
              </TableCell>
              <TableCell align="center" className="table_column">
             	40
              </TableCell>
              <TableCell align="center" className="table_column">
              40
              </TableCell>  
               <TableCell align="center" className="table_column">
              40
              </TableCell>
              <TableCell align="center" className="table_column">
              40
              </TableCell>
              <TableCell align="center" className="table_column">
              40
              </TableCell>
              <TableCell align="center" className="table_column">
              40
              </TableCell>
              
              
            </TableRow>


            <TableRow >
              <TableCell align="center" className="table_head">
               Predictable StockOnHand
               </TableCell>
             <TableCell align="center" className="table_column">
              25
              </TableCell>
              <TableCell align="center" className="table_column">
             	20
              </TableCell>
              <TableCell align="center" className="table_column">
              15
              </TableCell>  
               <TableCell align="center" className="table_column">
              36
              </TableCell>
              <TableCell align="center" className="table_column">
              12
              </TableCell>
              <TableCell align="center" className="table_column">
             23
              </TableCell>
              <TableCell align="center" className="table_column">
              11
              </TableCell>
              
            </TableRow>

            <TableRow >
              <TableCell align="center" className="table_head">
                Monitory Loss
              </TableCell>
              <TableCell align="center" className="table_column">
              {(25-11)*20}
              </TableCell>
              <TableCell align="center" className="table_column">
             	{(40-20)*20}
              </TableCell>
              <TableCell align="center" className="table_column">
              {(40-15)*20}
              </TableCell>  
               <TableCell align="center" className="table_column">
              {(40-36)*20}
              </TableCell>
              <TableCell align="center" className="table_column">
              {(40-12)*20}
              </TableCell>
              <TableCell align="center" className="table_column">
              {(40-23)*20}
              </TableCell>
              <TableCell align="center" className="table_column">
              {(40-11)*20}
              </TableCell>
              
            </TableRow>
            <TableRow >
              <TableCell align="center" className="table_head">
                Supply
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
             	--
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>  
               <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              <TableCell align="center" className="table_column">
              90
              </TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </Paper>

       
       </div>
 </div>
      

      );
  }
}
export default SingleItemDetail;