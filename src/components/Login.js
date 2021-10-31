import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
	state = {
		authedUser: null,
	}
	handleChange = (e) => {
		const authedUser = e.target.value
		this.setState(() => ({
			authedUser,
		}))
	}
	handleLogin = (e) => {
		const { authedUser } = this.state
		const { dispatch } = this.props

		if (authedUser !== 'select' && authedUser !== null) {
			dispatch(setAuthedUser(authedUser))
		}
	}
	render() {
		const { users } = this.props
		return (
			<div className='login'>
				<h2>LOG IN</h2>
				<select
					className='select-user'
					defaultValue='select'
					onChange={this.handleChange}
				>
					<option value='select' disabled>
						Select User
					</option>
					{Object.keys(users).map((id) => (
						<option key={id} value={id}>
							{users[id].name}
						</option>
					))}
				</select>
				<button className='btn' onClick={this.handleLogin}>
					Login
				</button>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		users,
	}
}

export default connect(mapStateToProps)(Login)
