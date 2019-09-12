import React, {Component} from 'react';
import Header from '../../components/Header/index';
import ImagePanel from '../../components/ImagePanel/index';
import Paragraph from '../../components/Paragraph/index';
import "./style.css";

class Index extends Component {
    
    render() {
        return(
          <React.Fragment>
            <div class="box-shadow" id="main-first-sect">
              <ImagePanel class="s4c-med-img" id="logo-s4c-img" src="./assets/images/s4cmed.svg" alt="Styles For Confidence Medium Logo"/>
            </div>
            <div class="grid-container">
              <div class="box-shadow" id="main-conf">
                <Header id="efficacy-head">SELF-EFFICACY STARTS WITH</Header>
                <Header id="conf-head">CONFIDENCE</Header>
              </div>
              <div class="box-shadow" id="about-s4c">
                <Header id="abt-head">ABOUT S4C</Header>
                <Paragraph id="abt-para">
                  Styles 4 Confidence is a nonprofit organization that provides hairstyles for boys
                  and girls in schools free of charge to the student and parent or Guardian. We
                  empower our students by reinforcing positivity and readiness. Styles 4 Confidence
                  looks to combat hinderances and bullying in schools by highlighting our four
                  pillars: Confidence, Self- Efficacy, Excellence, and Individuality.</Paragraph>
              </div>
              <div class="box-shadow" id="main-wedo">
                <Header id="wedo-head">WHAT WE DO</Header>
                <Paragraph id="wedo-para1">
                  We help children of low income neighborhoods to embrace an attitude of excellence by increasing self-confidence.
                  <br/>When you look better, you feel better and are more confident!
                </Paragraph>
              </div>
              <div class="box-shadow" id="main-mission">
                <Header id="mission-head">MISSION AND VISION</Header>
                <Paragraph id="mission-para1">
                  Styles 4 Confidence strives to enhance the confidence and growth of students.
                  <br/>Our vision is to empower students; to reinforce their innate sense of S4C's four pillars: Confidence, Self-efficacy, Excellence, and Individuality.
                </Paragraph>
              </div>
              <div class="box-shadow" id="goal-panel">
                <Header id="goal-head">100%</Header>
                <Paragraph id="goal-para">
                  Our goal is to improve the confidence and academics of students by 100%.
                </Paragraph>
              </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Index;