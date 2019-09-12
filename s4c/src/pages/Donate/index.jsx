import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Paragraph from '../../components/Paragraph/index';
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Donate extends Component {

  render(){
    return (
      <React.Fragment>
        <div class="box-shadow" id="donate-first-sect">
          <ImagePanel class="s4c-med-img" id="logo-s4c-img" src="./assets/images/s4cmed.svg" alt="Styles For Confidence Medium Logo"/>
        </div>
        <div class="donate-container box-shadow">
          <Header class="box-shadow" id="donate-header">Please DONATE 4 CONFIDENCE!</Header> 
          <div class="box-shadow" id="donate-s4c">
            <Header id="abt-head">ABOUT S4C</Header>
            <Paragraph id="abt-para">
              Donations can be made to Style4Confidence via PayPal and Patreon. <br/><br/> Please choose one of the donation options below and click to donate to S4C
            </Paragraph>
            <a href="https://www.patreon.com/bePatron?u=24346912" data-patreon-widget-type="become-patron-button"><i class="fa fa-patreon fa-6x"></i></a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="R3G2SCHWB6E6N" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default Donate;