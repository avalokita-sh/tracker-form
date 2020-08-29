import React from 'react';
import StepDatePicker from './StepDatePicker.js';
import './Step2.css';

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="date">
    <div>
       <i className="fa fa-info-circle 2x icon__small"></i>
       Select when campaign starts and ends
    </div>
  	 <div className="date__group">
	    <div className="form-group date__item">
        <label>START</label>
	    	<StepDatePicker date={props.startDate} name='startDate' handleChange={props.handleStartDateChange}/>
	    </div>
	    <div className="form-group date__item">
        <label>END</label>
	    	<StepDatePicker date={props.endDate} name='endDate' handleChange={props.handleEndDateChange}/>
	     </div>
     </div>
    </div>
  );
}

export default Step2;