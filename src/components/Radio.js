import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor() {
    super();
    
		this.state = {
			radioClick: 'name'
		};
	}

	onChange = (e) => {
    this.props.sortBy(e.target.value);
	}

	render() {
		return (
      <div className='radioButtons'>
        <div className='left'>
          <input type='radio' 
                 defaultChecked
                 onChange={this.onChange}
                 value='name'
                 name='sort'
                 id='name' />
          <label htmlFor='name'>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input type='radio' 
                 onChange={this.onChange}
                 value='age'
                 name='sort'
                 id='age' />
          <label htmlFor='age'>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );

	}
}

// Uncomment the snippet below
Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;
