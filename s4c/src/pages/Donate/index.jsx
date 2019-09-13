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
          <ImagePanel class="s4c-med-img box-shadow" id="logo-s4c-img" src="./assets/images/s4cmed.svg" alt="Styles For Confidence Medium Logo"/>
        </div>
        <div class="donate-container">
          <Header class="box-shadow" id="donate-header">DONATE 4 CONFIDENCE!</Header> 
          <Paragraph id="donate-para">
            Donations can be made to Style4Confidence via PayPal and Patreon. <br/><br/> Please click one of the donation options below to donate.
          </Paragraph>
          <div id="don1">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="R3G2SCHWB6E6N" />
              {/* <input type="submit" border="0" name="submit" value="Donate" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
              <button id="paypal" type="submit" class="btn btn-success box-shadow">
                  <i class="fab fa-paypal pay"></i> DONATE
              </button>
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
          <div id="don2">
            <a href="https://www.patreon.com/bePatron?u=24346912" data-patreon-widget-type="become-patron-button"><i class="fab fa-patreon box-shadow" id="patr"><span id="don-text">DONATE</span></i></a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default Donate;