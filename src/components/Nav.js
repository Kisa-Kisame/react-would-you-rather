import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
	handleLogout = (e) => {
		const { dispatch } = this.props
		dispatch(unsetAuthedUser())
	}
	render() {
		const { authedUser, name } = this.props
		return (
			<nav className='nav'>
				<ul>
					<li>
						<NavLink to='/' exact activeClassName='active'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/add' activeClassName='active'>
							New Question
						</NavLink>
					</li>
					<li>
						<NavLink to='/leaderboard' activeClassName='active'>
							Leader Board
						</NavLink>
					</li>
				</ul>
				{authedUser !== null && (
					<div>
						<p>Hello, {name}</p>
						<NavLink to='/' activeClassName='' onClick={this.handleLogout}>
							Logout
						</NavLink>
					</div>
				)}
			</nav>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		authedUser,
		name: authedUser !== null ? users[authedUser].name : '',
	}
}

export default connect(mapStateToProps)(Nav)
