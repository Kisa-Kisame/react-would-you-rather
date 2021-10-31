import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
	toPoll = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}
	render() {
		const { id, question, avatar, text } = this.props
		const author = question.author

		return (
			<div className='question'>
				<h4>{author} asks:</h4>
				<hr />
				<div className='question-info'>
					<img src={avatar} alt={`Avatar of ${author}`} className='avatar' />
					<hr />
					<div className='question-info-txt'>
						<h3>Would You Rather:</h3>
						<p>...{text}...</p>
						<Link to={`/questions/${id}`}>
							<button className='btn' onClick={(e) => this.toPoll(e, id)}>
								View Poll
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
	const question = questions[id]
	const author = users[question.author]
	const text = question.optionOne.text
	return {
		id,
		question: question ? formatQuestion(question, author) : null,
		avatar: author.avatarURL,
		text,
	}
}

export default withRouter(connect(mapStateToProps)(Question))
