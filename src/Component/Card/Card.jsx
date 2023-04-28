import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <p>{props.comment}</p>
        <img src={props.pictProfil} alt="" />
        <p>{props.nama}</p>
        <p>{props.job}</p>
    </div>
  )
}

export default Card