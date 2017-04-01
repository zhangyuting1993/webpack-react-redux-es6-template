import React, {PropTypes,Component} from 'react';

class RadioComponent extends Component {  
  constructor(props) {
	    super(props)
  }
  
  render() {
  	const {option, onchange} = this.props
    return (
	     <div className="form-group">
                {option.map((item,index)=>{
                    return(
                       <label className="radio-inline"  key={index}>
                         <input type="radio" disabled={item.disabled} name={item.name} defaultChecked={item.checked} value={item.value} onChange={()=>onchange(index)} /> {item.text}
                       </label>
                    )  
                })} 
        </div>      
    )
  }
} 

RadioComponent.PropTypes = {
    option:PropTypes.array.isRequired,
    onchange:PropTypes.func.isRequired
}

export default  RadioComponent;


