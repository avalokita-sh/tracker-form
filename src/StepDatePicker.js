import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
class StepDatePicker extends React.Component {
  
  render() {
    return (
      <>
        <DatePicker
          name={this.props.name}
          selected={this.props.date}
          onChange={this.props.handleChange}
        />
      </>
    );
  }
}

export default StepDatePicker;