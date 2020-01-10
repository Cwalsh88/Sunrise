import React from "react";
import { connect } from 'react-redux';
import '../../assets/stylesheets/home'

class Home extends React.Component {
  render () {    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row project">
            <div className="item">
              Earth Day Strike
            </div>
            <div className="item">
              South Side Hub
            </div>
            <div className="item">
              Endorsements
            </div>
            <div className="item">
              National Legislation
            </div>
            <div className="item">
              College Outreach
            </div>
            <div className="item">
              Fellowship
            </div>
          </div>
          <div className="row team">
            <div className="item">
              Actionss
            </div>
            <div className="item">
              Art
            </div>
            <div className="item">
              Comms
            </div>
            <div className="item">
              Fundraising
            </div>
            <div className="item">
              Onboarding
            </div>
            <div className="item">
              Presentation
            </div>
            <div className="item">
              Strategic Partnership
            </div>
            <div className="item">
              Tech
            </div>
          </div>
          <div className="row leadership">
            <div className="item">
              Emailer
            </div>
            <div className="item">
              Press Handler
            </div>
            <div className="item">
              Tabler
            </div>
            <div className="item">
              Logistor
            </div>
            <div className="item">
              Interpersonal
            </div>
          </div>
          <div className="row hc">
            <div className="item">
              Hub Coordinator
            </div>
          </div>
        </div>  
      </React.Fragment>
    );
  }
}


export default connect()(Home);