import React, {Component} from 'react';
import "./style.css";

import Header from '../../components/Header/index';
import Paragraph from '../../components/Paragraph/index';
import ImagePanel from '../../components/ImagePanel/index';

class BioPanel extends Component{
  render(){
    return (
      <div class="bio-panel">
        <Header class="bio-name" id={"bio-name"+this.props.id} >{`${this.props.position} - ${this.props.name}`}</Header>
        <Paragraph class="bio-para" id={"bio-para-"+this.props.id}>
          <ImagePanel class="s4c-bio-img" id={this.props.id+"-s4c-img"} src={this.props.src} alt={`${this.props.founder}, ${this.props.name} image`}/>
            {this.props.bio}
        </Paragraph>
      </div>
    );
  }
}

export default BioPanel;