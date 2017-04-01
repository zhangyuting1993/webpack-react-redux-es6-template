import React, {PropTypes,Component} from 'react';
import { connect } from 'react-redux';
import {changeRaidoType} from 'actions/index';
import RadioComponent  from 'components/RadioComponent';

import { browserHistory } from 'react-router'

      


class Page1 extends Component {
  constructor(props) {   
	    super(props)
  }

  
  componentWillMount(){
       
  }    
    
  render() {   
    let {radioState,handleChangeRadio}=this.props;

    return ( 
      <div> 
          <h5>page1</h5>        
	        <RadioComponent option={radioState.radioOption} onchange={handleChangeRadio} />
                              
	  </div>        
          
    );      
  }
}        
  
function mapStateToProps(state) {
   return{   
      radioState:state.radioState,

   }
}   


function mapDispatchToProps(dispatch) {
  return {

     handleChangeRadio(index){
        dispatch(changeRaidoType(index));
     }

  };
}


const page1 =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);



export default page1;
