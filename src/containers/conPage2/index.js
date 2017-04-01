import React, { Component } from 'react';
import { connect } from 'react-redux';  
   

class Page2 extends Component {
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
            Page2
                      

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



const page2 =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);

export default page2;