export function formatQuestionResults(
	optionOneVotes,
	optionTwoVotes,
	optionOneText,
	optionTwoText,
	totalVotes,
	voted
) {
	return {
		optionOne: {
			votes: optionOneVotes,
			percentage: (optionOneVotes / totalVotes) * 100,
			text: `${optionOneVotes} out of ${totalVotes}`,
			questionText: `Would you rather ${optionOneText}?`,
		},
		optionTwo: {
			votes: optionTwoVotes,
			percentage: (optionTwoVotes / totalVotes) * 100,
			text: `${optionTwoVotes} out of ${totalVotes}`,
			questionText: `Would you rather ${optionTwoText}?`,
		},
		voted,
	}
}
