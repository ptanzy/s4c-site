import React, {Component} from "react";
import "./style.css";

class ImagePanel extends Component{
  render() {
    return (<img className={"s4c-image "+this.props.class} id={this.props.id} src={this.props.src} alt={this.props.alt} />);
  }
}

export default ImagePanel;