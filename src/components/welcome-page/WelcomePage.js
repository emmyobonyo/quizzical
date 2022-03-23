import React from 'react'
import './welcomePage.css'
import blobs from '../../images/blobs.png'

function WelcomePage() {
  return (
    <div>
      <img src={ blobs } className="blobs"/>
      <div className="welcome-page">
        <div>
          <h1>Quizzical</h1>
          <p>Test your knowledge of common quizzes</p>
          <button className="start-game-button">Start Game</button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage