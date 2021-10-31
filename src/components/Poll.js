import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestionResults } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import PollAnswer from './PollAnswer'
import PollResults from './PollResults'

class Poll extends Component {
	handleSubmit = (e, id, option) => {
		e.preventDefault()

		const { dispatch } = this.props
		dispatch(handleAnswerQuestion(id, option))
	}
	render() {
		const { id, question, avatar, name, answered, results } = this.props
		const { author } = question ? question : ''
		return (
			<div className='poll'>
				{question === null ? (
					<div>
						<h3>
							The question with the id: <u>{id}</u> does not exist!
						</h3>
					</div>
				) : (
					<div>
						<h4>Asked by {name}:</h4>
						<hr />
						<div className='poll-info'>
							<img
								src={avatar}
								alt={`Avatar of ${author}`}
								className='avatar'
							/>
							<hr />
							<div className='poll-info-txt'>
								{answered ? (
									<PollResults results={results} />
								) : (
									<PollAnswer id={id} handleSubmit={this.handleSubmit} />
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }, props) {
	const { id } = props.match.params

	const question = questions[id]
	if (question) {
		const author = users[question.author]
		const { optionOne, optionTwo } = question
		const voted = optionOne.votes.includes(authedUser)
			? '1'
			: optionTwo.votes.includes(authedUser)
			? '2'
			: null

		return {
			id,
			question,
			avatar: author.avatarURL,
			name: author.name,
			answered:
				optionOne.votes.includes(authedUser) ||
				optionTwo.votes.includes(authedUser),
			results: formatQuestionResults(
				optionOne.votes.length,
				optionTwo.votes.length,
				optionOne.text,
				optionTwo.text,
				optionOne.votes.length + optionTwo.votes.length,
				voted
			),
		}
	} else {
		return {
			id,
			question: null,
			avatar: null,
			name: null,
			answered: null,
			results: null,
		}
	}
}

export default connect(mapStateToProps)(Poll)
