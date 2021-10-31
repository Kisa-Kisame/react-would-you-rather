import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollAnswer extends Component {
	state = {
		option: 'optionOne',
	}
	handleChange = (e) => {
		this.setState({
			option: e.target.value,
		})
	}
	render() {
		const { id, question } = this.props

		return (
			<div>
				<h2>Would You Rather...</h2>
				<form
					onSubmit={(e) => this.props.handleSubmit(e, id, this.state.option)}
				>
					<div className='radio-group'>
						<label>
							<input
								type='radio'
								name='radioOptions'
								value='optionOne'
								onChange={this.handleChange}
								defaultChecked
							/>
							{question.optionOne.text}
						</label>
						<label>
							<input
								type='radio'
								name='radioOptions'
								value='optionTwo'
								onChange={this.handleChange}
							/>
							{question.optionTwo.text}
						</label>
					</div>
					<button className='btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
	return {
		id,
		question: questions[id],
	}
}

export default connect(mapStateToProps)(PollAnswer)
