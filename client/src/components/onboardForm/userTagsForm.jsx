import React, {Component} from 'react';
import axios from 'axios';
import InterestsTags from './interestsTags';

export class userTagsForm extends Component {


	constructor(props) {
		super(props);

		this.state = {interestChips: []} 
	}


	continue = (e) => {
		e.preventDefault();

		// call api to update users tags
		const {values: {skills, interests}} = this.props;
		let data = {
			"skills": skills,
			"interests": interests
		};
		console.log("data is:", data);
		axios.post('/api/update_tags', {
			body: JSON.stringify(data)
		})
			.then((response) => {
				console.log(response);
			})
			.then((data) => {
				console.log(data);
			});

		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};


	onChipChange = chips => {
        this.setState({ interestChips : chips });
    };


	render() {
		const {handleChange, values} = this.props;
		return(
			<div class="main-container">
				<div class="form">
					<h1>Tags</h1>
					<p>Enter some tags to get started.</p>
					<h1>Skills</h1>
					<input type="text" name="skills" placeholder="Skills" onChange={handleChange('skills')}/>
					<h1>Interests</h1>
					<InterestsTags onChipChange={this.onChipChange} chips={this.state.interestChips}/>
					<input type="text" name="interests" placeholder="Interests" onChange={handleChange('interests')}/>
					<br/>
					<input type="submit" class="submit-button" value="continue" onClick={this.continue}/>
				</div>
			</div>
		)
	}


}

export default userTagsForm;
