import React from 'react';
import './Step3.css';

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="budgets">
      <div className="form-group mx-sm-4">
        <label htmlFor="password">Total budget</label>
        <input
          className={`form-control ${props.error.budget?'is-invalid':''}`}
          name="budget"
          type="text"
          value={props.budget}
          onChange={props.handleChange}       
          required
        /> 
        <div className="invalid-feedback">
          {props.error.budget}
        </div>     
      </div>
      <div className="form-group mx-sm-4">
        <label htmlFor="password">Total impressions</label>
        <input
          className={`form-control ${props.error.impressions?'is-invalid':''}`}
          name="impressions"
          type="text"
          value={props.impressions}
          onChange={props.handleChange}  
        />
        <div className="invalid-feedback">
          {props.error.impressions}
        </div>       
      </div>
      <div className="form-group mx-sm-4">
        <button className="form-control btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default Step3;