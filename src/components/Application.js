import React, { Component } from 'react';
import LeftMenu from 'components/LeftMenu';

class Application extends Component {
  constructor(props) {
      super(props);
  }

  render() {  
    return (
      <div>
        <div className="main-wrap">
                <LeftMenu/>
                <div className="main ">
                    {this.props.children}
                </div>
     
         </div>
    </div>
    );
  }
}


export default Application;