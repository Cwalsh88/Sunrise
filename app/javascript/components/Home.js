import React from "react";
import { connect } from 'react-redux';
import '../../assets/stylesheets/home'

class Home extends React.Component {
  render () {    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row projects"> 
            Projects
          </div>
          <div className="row teams">
            Teams
          </div>
          <div className="row leadership">
            Leadership
          </div>
          <div className="row hc">
            Hub Coordinator
          </div>
        </div>  
      </React.Fragment>
    );
  }
}


export default connect()(Home);