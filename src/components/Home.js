import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import NavHome from './NavHome'

class Home extends Component {
	state = {
		answeredQuestions: false,
	}

	handleChange = (answered) => {
		this.setState(() => ({
			answeredQuestions: answered,
		}))
	}

	render() {
		return (
			<div className='home-list'>
				<NavHome
					answeredQuestions={this.state.answeredQuestions}
					handleChange={this.handleChange}
				/>
				<ul>
					{this.state.answeredQuestions === true
						? this.props.answeredQuestions.map((id) => (
								<li key={id}>
									<Question id={id} />
								</li>
						  ))
						: this.props.unansweredQuestions.map((id) => (
								<li key={id}>
									<Question id={id} />
								</li>
						  ))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, questions }) {
	const answeredQuestions = Object.keys(questions).filter(
		(id) =>
			questions[id].optionOne.votes.includes(authedUser) ||
			questions[id].optionTwo.votes.includes(authedUser)
	)
	const sortedQuestions = Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	)
	return {
		answeredQuestions: Object.keys(sortedQuestions)
			.filter((id) => answeredQuestions.includes(sortedQuestions[id]))
			.map((id) => sortedQuestions[id]),
		unansweredQuestions: Object.keys(sortedQuestions)
			.filter((id) => !answeredQuestions.includes(sortedQuestions[id]))
			.map((id) => sortedQuestions[id]),
	}
}

export default connect(mapStateToProps)(Home)
