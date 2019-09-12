import React, {Component} from 'react';
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Nav extends Component {

    render(props) {
        return(
          <nav className="s4c-nav">
            
            <ul> 
              <li><ImagePanel id="s4c-img-long" src="./assets/images/s4clong.svg" alt="Styles For Condfidence Logo"/></li>
              {this.props.links.map(function(item){
                return <li className="s4c-nav-link prim-text"><a href={item.href}>{item.text}</a></li>;
              })}
            </ul>
          </nav>
        );
    }
}

export default Nav;