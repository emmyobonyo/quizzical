import React from 'react'
import './welcomePage.css'

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div>
        <h1>Quizzical</h1>
        <p>Test your knowledge of common quizzes</p>
        <button className="start-game-button">Start Game</button>
      </div>
    </div>
  )
}

export default WelcomePage