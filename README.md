# WouldYouRather Project

This project is an application that lets a user play the 'Would You Rather?' game. In this app, users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## Installation and launch instructions

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project files

```bash
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
│   └── logo192.png
│   └── logo512.png
│   └── manifest.json
│   └── robots.txt
└── src
    ├── actions
				├── authedUser.js # Contains the actions for log in and Log out
				├── questions.js # Contains the actions that deal with the game questions such as: receiving all the questions, adding a new question to the store ans handling answering a question
				├── shared.js # Contains the action that handles the initial data( receiving the questions, the users and setting the authenticated user to null)
				├── users.js # Contains the action that receives all the users
    ├── components
				├── App.js # The root component of the app.
				├── Home.js # The Component that renders the Home page
				├── Leaderboard.js # The Component that renders the leaderboard page
				├── Login.js # The Component that renders the Login page
				├── Nav.js # The Component that renders the nav bar
				├── NavHome.js # The Component that renders the nav for the home page (the Unanswered and Answered questions)
				├── NewQuestion.js # The Component that renders the New Question page
				├── Poll.js # The Component that renders a poll for a question. Uses the PollAnswer and PollResults component depending if the question has been answered or it needs to be answered
				├── PollAnswer.js # The Component that renders a poll for a question that hasn't been answered
				├── PollResults.js # The Component that renders a poll for a question that has been answered
				├── Question.js # The Component that renders a question for the Home page
				├── User.js # The Component that renders a user for the Leaderboard page
    ├── middleware
				├── index.js # Applies the thunk and logger middleware
				├── logger.js # A middleware that logs the action taken and its results in the console
    ├── reducers
				├── authedUser.js # Contains the reducer for log in and Log out
				├── index.js # Combines all the reducers and exports them
				├── questions.js # Contains the reducer that deal with the game questions
				├── users.js # Contains the reducer for the users
    ├── utils
				├── _DATA.js # Contains the reducer for the users
				├── api.js # Contains the reducer for the users
				├── helpers.js # Contains the reducer for the users
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── index.css # Styles for the app
    └── index.js # Modified this file to use Provider from react-redux
    ├── serviceWorker.js # Provided with Create React App.
    ├── setupTests.js # Provided with Create React App.
```

## App

The root component of the app. Contains the nav bar rendered by the `Nav` component and defines all the Routes to the app pages. When this component mounts the initial data is retrieved.

## Home

The Component that renders the Home page. Has a nav bar with two options: Unanswered questions and Answered questions( rendered using the `NavHome` component) and a list of questions. The questions depend on the option selected and are sorted from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default. Each question is rendered using the `Question` component.

## Leaderboard

The Component that renders the leaderboard page. It contains the list with all users. Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked. Each user is renderd using the `User` component.

## Login.js

The Component that renders the Login page. It has a login box that the user can use to select a name from the list of existing users.

## Nav.js

The Component that renders the nav bar that is visible on all of the pages. It shows a 'Hello username' message and the Logout button only if a user is logged in.

## NavHome.js

The Component that renders the nav for the home page (the Unanswered and Answered
questions)

## NewQuestion.js

The Component that renders the New Question page. It has two text input boxes for adding the options for the question. The user can use this page to create new questions.

## Poll.js

The Component that renders a poll for a question. Uses the `PollAnswer` component to render an unanswered question and the `PollResults` component to render an answered question.

## PollAnswer.js

The Component that renders a poll for a question that hasn't been answered. Uses radio buttons to choose between the 2 options.

## PollResults.js

The Component that renders a poll for a question that has been answered. Shows for each option the percentage and the number of people who voted for that option. The authenticated user's vote is colored.

## Question.js

The Component that renders a question for the Home page.

## User.js

The Component that renders a user for the Leaderboard page. It shows the user's name, the number of questions answered, the number of questions created and a score. The score is the sum of the number of questions answered and the number of questions asked.
