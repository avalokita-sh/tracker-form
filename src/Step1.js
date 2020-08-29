import React from 'react';
import Checkbox from './Checkbox';
import './Step1.css';

class Step1 extends React.Component {
  handleChange = (channel) => {
    this.props.setCampaignType(channel);
  }

  render(){
    if (this.props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <div className="list">
          <div className="list-item" onClick={() => this.handleChange(this.props.channels[0])}>
            <i className="fa fa-mobile fa-3x" aria-hidden="true"></i><p>digital</p>
          </div>
          <div className="list-item" onClick={() => this.handleChange(this.props.channels[1])}>
            <i className="fa fa-map-signs fa-3x" aria-hidden="true"></i><p>Outside</p>
          </div>
          <div className="list-item" onClick={() => this.handleChange(this.props.channels[2])}>
            <i className="fa fa-television fa-3x" aria-hidden="true"></i><p>TV</p>
          </div>
          <div className="list-item" onClick={() => this.handleChange(this.props.channels[3])}>
            <i className="fa fa-soundcloud fa-3x" aria-hidden="true"></i><p>Radio</p>
          </div>
        </div>
        <div className="input__checkbox">
          <h6>Types of channel</h6>
          <Checkbox 
            options={this.props.channelTypes} 
            name="channelTypes"
            handleInputChange={this.props.handleInputChange}/>
        </div>
        <div className="input__checkbox">
          <h6>Tracking options</h6>
          <Checkbox 
            options={this.props.trackingOptions} 
            name="trackingOptions"
            handleInputChange={this.props.handleInputChange}/>
        </div>
      </div>
    );
  }
}

export default Step1;