import React, { useState } from 'react'
import {data} from '../utils/data'
import Attendee from './Attendee'

const Attendees = () => {
const [attendese,setattendese]=useState(data)

  return (
    <section className='attendese-box'>
  <div className='attendese-count'>
    <h1>Attendees(18)</h1>
    <a>See All</a>
  </div>
    
    <div className='attendese'>
     {
        attendese.map((attendee,index)=>{
            return <Attendee img={attendee.img}  name={attendee.name}   key={index}/>
        })
     }
    </div>
    </section>
  )
}

export default Attendees