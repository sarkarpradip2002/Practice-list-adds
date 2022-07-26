import React from 'react'
import Classes from  './Card.module.css'

 const Card=(props)=>{
  return (
    <div className={`${Classes.card} ${props.classes}`}>{props.children}</div>
  )
}

export default Card
