import React from 'react'
import './CardCommunity.css'
import { TbExternalLink } from 'react-icons/tb'
const CardComunity = (props) => {
  return (
    <div className=''>
        <h1 className='jumlah'>{props.jumlah}</h1>
        <div className="descDestination">
            <p >{props.desc}</p>
            <TbExternalLink/>
        </div>
    </div>
  )
}

export default CardComunity