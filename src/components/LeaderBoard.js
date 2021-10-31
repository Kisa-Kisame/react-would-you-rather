import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Leaderboard extends Component {
	render() {
		const { userIds } = this.props
		return (
			<div className='leaderboard'>
				<ul>
					{userIds.map((id) => (
						<li key={id}>
							<User id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		userIds: Object.keys(users)
			.sort(
				(a, b) =>
					Object.keys(users[b].answers).length +
					Object.keys(users[b].questions).length -
					Object.keys(users[a].answers).length -
					Object.keys(users[a].questions).length
			)
			.map((id) => id),
	}
}

export default connect(mapStateToProps)(Leaderboard)
