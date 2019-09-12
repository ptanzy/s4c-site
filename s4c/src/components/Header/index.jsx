import React, {Component} from 'react';
import "./style.css";

class Header extends Component {
    
    render() {
        return(
          <h1 className={"s4c-header prim-text "+this.props.class} id={this.props.id}>
            {this.props.children}
          </h1>
        );
    }
}

export default Header;