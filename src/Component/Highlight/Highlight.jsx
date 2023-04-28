import React from 'react'
import './Highlight.css'
const Highlight = (props) => {
  return (
    <div className='highlight'>
        <div className='info'>
            <p className='nama'>{props.nama}</p>
            <p className='time'>{props.time} READ</p>
        </div>
        <h5 className='title'>{props.title}</h5>
        <p className='desc'>{props.desc}</p>
        <p>Read More </p>
    </div>
  )
}

export default Highlight