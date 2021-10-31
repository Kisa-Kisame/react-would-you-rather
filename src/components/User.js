import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
	render() {
		const { id, users } = this.props
		const { name, avatarURL, answers, questions } = users[id]
		const score = Object.keys(answers).length + Object.keys(questions).length
		return (
			<div className='user'>
				<img src={avatarURL} alt={`Avatar of ${id}`} className='avatar' />
				<hr />
				<div className='user-info'>
					<h2>{name}</h2>
					<h3>Answered questions: {Object.keys(answers).length}</h3>
					<hr />
					<h3>Created questions: {Object.keys(questions).length}</h3>
				</div>
				<hr />
				<div className='user-score'>
					<h3>Score:</h3>
					<hr />
					<h3>{score}</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
	return {
		id,
		users,
	}
}

export default connect(mapStateToProps)(User)
