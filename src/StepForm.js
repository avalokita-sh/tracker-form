import React from 'react';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';
import { channels, validateCheckbox, validateDates, validateInput, isChecked, defaultDate } from './data.js';
import './StepForm.css';

class StepForm extends React.Component {

  state = {
    currentStep: 1,
    currentCampaign:{},
    campaignType:'',
    channelTypes:[],
    trackingOptions:[],
    username: '',
    password: '', 
    startDate: new Date(),
    endDate: this.setEndDate(),
    budget: 1000,
    impressions: 1000,
    error:{
      budget:'',
      impressions:''
    },
    submitted: false
  }

  componentDidMount() {
    this.setCampaignType(channels[0]);
  }
  //Form submit
  handleSubmit = event => {
    event.preventDefault(); 
    this.setState({submitted:true});   
    const { campaignType, channelTypes, trackingOptions, startDate, endDate,budget,impressions } = this.state;
    const result = {
       campaignType:campaignType,
       channelTypes: isChecked(channelTypes),
       trackingOptions: isChecked(trackingOptions),
       startDate:defaultDate(startDate),
       endDate: defaultDate(endDate),
       budget: budget,
       impressions: impressions
    }
    //post form values - result
    console.log('Your registration detail: \n ',result);
  }

  setEndDate() {
    let endDate = new Date();
    endDate.setMonth(new Date().getMonth() + 3);
    return new Date(endDate);
  }
  
  setCampaignType = (channel) => {
    this.setState({
      currentCampaign:channel,
      campaignType: channel.campaignType,
      channelTypes:[...channel.channelTypes],
      trackingOptions:[...channel.trackingOptions]
    });
  }
  /*
    handling change event in inputs in each steps
  */
  //handling checkbox onChange
  handleInputChange = event => {
    if(event.target.name === 'channelTypes'){
      let channelTypesDetails = [...this.state.channelTypes];
      channelTypesDetails.map(ct => {
        if(ct.type === event.target.value){
            ct.checked = !ct.checked;
        }
      });

      this.setState({
        channelTypes: channelTypesDetails
      });
    }
    if(event.target.name === 'trackingOptions'){
      let trackingDetails = [...this.state.trackingOptions];
      trackingDetails.map(td => {
        if(td.type === event.target.value){
            td.checked = !td.checked;
        }
      });
      this.setState({
        trackingOptions:trackingDetails
      });
    }
  }
  //handling date onChange
  handleStartDateChange = (date) => {
    this.setState({
      startDate: date
    })    
  }

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date
    })    
  }
  
  //handling budgets onChange
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value, error:{[name]:validateInput(value)}
    })    
  }
   
  /*
    navigating different steps with prev and next buttons
  */
  next = () => {
    if(this.state.currentStep === 1){
      if(!validateCheckbox(this.state.channelTypes)){
        alert('Please select a channel type.');
      } else if(!validateCheckbox(this.state.trackingOptions)){
        alert('Please select a tracking option.');
      } else {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1;
        this.setState({
          currentStep: currentStep
        });
      }       
    }

    if(this.state.currentStep === 2){
      if(validateDates(this.state.startDate,this.state.endDate) !== true){
        alert(validateDates(this.state.startDate,this.state.endDate));
      } else {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1;
        this.setState({
          currentStep: currentStep
        });
      }  
    }

  }
    
  prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* rendering next and prev buttons
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        disabled={this.state.submitted}
        className="btn btn-secondary" 
        type="button" onClick={this.prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this.next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <>
        <div className="container-fluid header">
          <h6 className={this.state.currentStep === 1?'active':''}>STEP 1 - SELECT CHANNEL</h6>
          <h6 className={this.state.currentStep === 2?'active':''}>STEP 2 - FLIGHTS </h6>
          <h6 className={this.state.currentStep === 3?'active':''}>STEP 3 - BUDGETS </h6>
        </div>
        <div className="container">
          
        <form onSubmit={this.handleSubmit}>
          <Step1 
            currentStep={this.state.currentStep}
            currentCampaign={this.state.currentCampaign} 
            channels={channels}
            channelTypes={this.state.channelTypes}
            trackingOptions={this.state.trackingOptions}
            handleInputChange={this.handleInputChange}
            setCampaignType={this.setCampaignType}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleStartDateChange={this.handleStartDateChange}
            handleEndDateChange={this.handleEndDateChange}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            budget={this.state.budget}
            impressions={this.state.impressions}
            error={this.state.error}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
        </div>
      </>
    );
  }
}

export default StepForm;