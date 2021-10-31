import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
		toHome: false,
	}
	handleChange = (e, option) => {
		const text = e.target.value
		if (option === 1) {
			this.setState(() => ({
				optionOneText: text,
			}))
		} else if (option === 2) {
			this.setState(() => ({
				optionTwoText: text,
			}))
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
		dispatch(handleAddQuestion(this.state))

		console.log('New Question: ', this.state)
		this.setState(() => ({
			optionOneText: '',
			optionTwoText: '',
			toHome: true,
		}))
	}
	render() {
		const { optionOneText, optionTwoText, toHome } = this.state

		if (toHome === true) {
			return <Redirect to='/' />
		}

		return (
			<div className='new-question'>
				<h2>Create New Question</h2>
				<hr />
				<div>
					<h3>Complete the question:</h3>
					<h3>Would you rather...</h3>
					<form className='new-question-form' onSubmit={this.handleSubmit}>
						<input
							placeholder='Enter Option One Text Here'
							value={optionOneText}
							className='textInput'
							onChange={(e) => this.handleChange(e, 1)}
						/>
						<h3>OR</h3>
						<input
							placeholder='Enter Option Two Text Here'
							value={optionTwoText}
							className='textInput'
							onChange={(e) => this.handleChange(e, 2)}
						/>
						<button
							type='submit'
							className='btn'
							disabled={optionOneText === '' || optionTwoText === ''}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		questions,
	}
}

export default connect(mapStateToProps)(NewQuestion)
