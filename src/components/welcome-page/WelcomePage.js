import React from 'react'
import './welcomePage.css'
import blobTop from '../../images/blobs.png'
import blobBottom from '../../images/blobs1.png'

function WelcomePage() {
  return (
    <div>
      <img src={ blobTop } className="blob-top" />
      <div className="welcome-page">
        <div>
          <h1>Quizzical</h1>
          <p>Test your knowledge of common quizzes</p>
          <button className="start-game-button">Start Game</button>
        </div>
      </div>
      <img src={ blobBottom } className="blob-bottom"/>
    </div>
  )
}

export default WelcomePage