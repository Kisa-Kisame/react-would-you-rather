import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
	render() {
		const { results } = this.props
		return (
			<div>
				<h2>Results:</h2>
				<div className='all-options'>
					<div
						className={'poll-option' + (results.voted === '1' ? ' voted' : '')}
					>
						<div className='vote'>VOTED</div>
						<h3>{results.optionOne.questionText}</h3>
						<div className='progress-bar'>
							<div
								className='percentage'
								style={{ width: `${results.optionOne.percentage}%` }}
							>
								{results.optionOne.percentage}%
							</div>
						</div>
						<p>{results.optionOne.text}</p>
					</div>
					<div
						className={'poll-option' + (results.voted === '2' ? ' voted' : '')}
					>
						<div className='vote'>VOTED</div>
						<h3>{results.optionTwo.questionText}</h3>
						<div className='progress-bar'>
							<div
								className='percentage'
								style={{ width: `${results.optionTwo.percentage}%` }}
							>
								{results.optionTwo.percentage}%
							</div>
						</div>
						<p>{results.optionTwo.text}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(PollResults)
