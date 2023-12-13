import React from 'react';
import { response } from 'express';
//import DataFilter from './DataFilter';

/* const Dashboard = () => {
 return (
    <div className="dashboard">
      <Chart />
      <Table /> 
      <Card />
    </div>
 );
}; */

class gif extends Component {

constructor (props){

  super(props);

  this.state = {
    value:props.value,
    }

  }
  apiCall(url, consect){
    fetch(url);

     then(response => response.json());
     then(data => {this.setState({data})})

     .catch(error =>{console.log(error)})
  }
  render(){ 
  }

}

