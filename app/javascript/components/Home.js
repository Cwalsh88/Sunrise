import React from "react";
import { connect } from 'react-redux';
import '../../assets/stylesheets/home'


const hiddenStyle = {
  display: 'none'
}

function Item(props) {
  return (
    <div className="item" style={props.isVisible ? {} : hiddenStyle}>
      {props.text}
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  renderItem(name) {
    return (
      <Item text={name} isVisible={!this.state.showTitle} />
    );
  }

  handleClick() {
    this.setState(state => ({
      showTitle: !state.showTitle
    }));
    
    // showTitle to an array
  }

  render () {    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row project" onClick={this.handleClick}>
            {this.renderItem('Earth Day Strike')}
            {this.renderItem('South Side Hub')}
            {this.renderItem('Endorsements')}
            {this.renderItem('National Legislation')}
            {this.renderItem('College Outreach')}
            {this.renderItem('Fellowship')}
          </div>
          <div className="row team">
            {this.renderItem('Actions')}
            {this.renderItem('Art')}
            {this.renderItem('Comms')}
            {this.renderItem('Fundraising')}
            {this.renderItem('Onboarding')}
            {this.renderItem('Presentation')}
            {this.renderItem('Strategic Partnership')}
            {this.renderItem('Tech')}
          </div>
          <div className="row leadership">
            {this.renderItem('Emailer')}
            {this.renderItem('Press Handler')}
            {this.renderItem('Tabler')}
            {this.renderItem('Logistor')}
            {this.renderItem('Interpersonal')}
          </div>
          <div className="row hc">
            {this.renderItem('Hub Coordinator')}  
          </div>
        </div>  
      </React.Fragment>
    );
  }
}


export default connect()(Home);