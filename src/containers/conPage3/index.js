import React, { Component } from 'react';
import { connect } from 'react-redux';  
   

class Page3 extends Component {
  constructor(props){
     super(props);
  }

  componentWillMount(){

  }


  componentDidMount(){

  

  }


  componentWillUnmount(){

  }


  render() {



      return(
        <div>
            Page3
                      

        </div>  
    )   
  }
}


function mapStateToProps(state) {
   return{   

   }    
}   

function mapDispatchToProps(dispatch){
     return{
     

            
     }      
}



const page3 =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Page3);

export default page3;