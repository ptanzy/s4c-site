import React, {Component} from 'react';
import "./style.css";

class Footer extends Component {
    
    render() {
        return(
          <footer className="s4c-footer">
            {this.props.children}
          </footer>
        )
    }
}

export default Footer;