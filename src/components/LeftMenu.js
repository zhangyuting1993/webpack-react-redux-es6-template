import React, { Component } from 'react';
import { Link,IndexLink} from 'react-router';
class LeftMenu extends Component {

  constructor(props) {
        super(props)
  }

   
  render() {
    return (  
            <div className="sidebar">
                <h4 className="sidebar-head">菜单</h4>
                <ul className="sidebar-menu">
                    <li data-sign="1" className="menu-1"><IndexLink to="/"  activeClassName="active">page1</IndexLink></li>
                    <li data-sign="2" className="menu-2"><Link to="/page2" activeClassName="active">page2</Link></li>
                    <li data-sign="3" className="menu-3"><Link to="/page3" activeClassName="active">page3</Link></li>
                </ul>
            </div> 
       
    );       
  }
}
export default LeftMenu;








