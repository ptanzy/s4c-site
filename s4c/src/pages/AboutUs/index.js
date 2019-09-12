import React, {Component} from 'react';
import Header from '../../components/Header/index';
// import ImagePanel from '../../components/ImagePanel/index';
import BioPanel from '../../components/BioPanel/index';
import "./style.css";
import s4c_bios from "../../data/s4c_people.json"

class AboutUs extends Component {
    
    render() {
        return(
          <React.Fragment>
            <Header class="box-shadow" id="bio-header">PEOPLE OF S4C</Header>
            <div class="bio-container box-shadow">
              {
                  s4c_bios.map((person, i) => (
                    <BioPanel id={i} name={person.name} position={person.position} src={person.imgSrc} bio={person.bio} />
                  ))
               }
            </div>
            {/* <div class="box-shadow" id="abt-last-sect">
              <ImagePanel class="s4c-med-img" id="logo-s4c-img" src="./assets/images/s4cmed.svg" alt="Styles For Confidence Medium Logo"/>
            </div> */}
          </React.Fragment>
        )
    }
}

export default AboutUs;