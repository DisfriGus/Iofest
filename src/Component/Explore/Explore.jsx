import React from 'react'
import './Explore.css'
const Explore = (props) => {
  return (
    <div className='cardExplore'>
        <img src={props.gambar} alt="" />
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
    </div>
  )
}

export default Explore