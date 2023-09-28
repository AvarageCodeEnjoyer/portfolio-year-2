import { useState } from 'react'
import GitCard from './GitCard'
import cardJson from './gitCardData.json'

function App() {
  return (
    <div className="card-container">
      { cardJson.map(cardData => {
        return <GitCard prop={cardData} />
      })}
    </div>
  )
}

export default App
