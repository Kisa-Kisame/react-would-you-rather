import React from 'react'

const NavHome = (props) => {
	const answered = props.answeredQuestions
	return (
		<nav className='nav-home'>
			<ul>
				<li
					className={answered ? '' : 'nav-home-active'}
					onClick={() => props.handleChange(false)}
				>
					Unanswered Questions
				</li>
				<li
					className={answered ? 'nav-home-active' : ''}
					onClick={() => props.handleChange(true)}
				>
					Answered Questions
				</li>
			</ul>
		</nav>
	)
}

export default NavHome
