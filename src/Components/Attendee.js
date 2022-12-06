import React from 'react'

const Attendee = ({img,name}) => {
  return (
    <div className='attendee-box'>
    <div className='attendee'>
     
        <img src={img}></img>
        <span>{name}</span>
        <p className='type'>member</p>
       
    </div>
    </div>
  )
}

export default Attendee