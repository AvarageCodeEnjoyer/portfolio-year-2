import { useState } from 'react'
function Card({prop}) {
  return (
    <div className="card">
        <a href={prop.url} target="_blank">
        <img 
          src={prop.img} alt={prop.alt} 
        />
        <h2>{prop.name}</h2>
        <p>{prop.description}</p>
    </a>
      </div>
  )
}

export default Card