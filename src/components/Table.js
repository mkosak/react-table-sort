import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor() {
    super();

		this.state = {
			people: [
				{
					name: "John Sina",
					birth: "11/30/2011"
				}, {
					name: "Barcy Washington",
					birth: "09/16/1992"
				}, {
					name: "Peter Parker",
					birth: "01/16/1992"
				}, {
					name: "Jimmy Shergil",
					birth: "12/12/2001"
				}, {
					name: "Alexander Alfred",
					birth: "02/09/1891"
				}, {
					name: "Krishna Gupta",
					birth: "12/01/1982"
				}, {
					name: "Sania Mirza",
					birth: "11/30/2011"
				}, {
					name: "Lata Pathak",
					birth: "10/31/1999"
				}
			]
		}
	}

	componentDidUpdate(prevProps) {
		const {sortParameter} = this.props;

		if (sortParameter !== prevProps.sortParameter) {
			const people = this.state.people.sort((sortParameter === 'name') ? this.compareNames : this.compareDates);

			this.setState({ people });
		}
	}
	
	compareDates(person1, person2) {
		const date1 = new Date(person1.birth);
		const date2 = new Date(person2.birth);
		
		if (date1 < date2) { return -1; }
    if (date1 > date2) { return 1; }

    return 0;
	}

	compareNames(person1, person2) {
		if (person1.name < person2.name) { return -1; }
    if (person1.name > person2.name) { return 1; }

    return 0;
	}

	render() {
		const listItems = this.state.people.map((item) =>
			<tr key={item.name}>
				<td>{item.name}</td>
				<td>{item.birth}</td>
			</tr>
		);

		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{listItems}
					</tbody>
				</table>
			</div>
		);
	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
