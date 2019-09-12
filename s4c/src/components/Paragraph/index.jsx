import React, {Component} from "react";
import "./style.css";

class Paragraph extends Component{

  render(props){
    return (
      <p className={"s4c-paragraph sec-text "+this.props.class} id={this.props.id}>{this.props.children}</p>
    );
  }
}

export default Paragraph;