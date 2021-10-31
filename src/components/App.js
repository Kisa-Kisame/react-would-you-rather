import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Nav from './Nav'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className='container'>
						<Nav />
						{this.props.loading === true ? (
							<div className='center'>
								<Route path='/' exact component={Login} />
								<Route path='/questions/:id' component={Login} />
								<Route path='/add' component={Login} />
								<Route path='/leaderboard' component={Login} />
							</div>
						) : (
							<div className='center'>
								<Route path='/' exact component={Home} />
								<Route path='/questions/:id' component={Poll} />
								<Route path='/add' component={NewQuestion} />
								<Route path='/leaderboard' component={LeaderBoard} />
							</div>
						)}
					</div>
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null,
	}
}

export default connect(mapStateToProps)(App)
