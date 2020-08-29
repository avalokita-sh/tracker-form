import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {

	renderCheckbox() {
		const options = this.props.options;
		return options.map(option => {
			return (
				<div className="form-check" key={option.type}>
				    <input
				      	className="form-check-input"
				        name={this.props.name}
				        type="checkbox"
				        onChange={e => this.props.handleInputChange(e)}
				        value={option.type}
				        checked={option.checked}
				    />
				    <label className="form-check-label">{option.type}</label>
			    </div>
			);
		});
	}
	render(){
		return <div className="checkbox">{this.renderCheckbox()}</div>
	}
}

export default Checkbox;