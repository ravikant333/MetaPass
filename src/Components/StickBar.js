import React from 'react'

const StickBar = () => {
  return (
    <section className='stick-bar'>
   <div className='stick-time'>
    <p>WED, DEC 14 · 5:00 AM IST</p>
    <h3>SolidJS NYC December Meetup</h3>
   </div>
  <div className='stick-info'>
    <div className='price'>
        <h3>Free</h3>
        <p>31 spots Left</p>
    </div>
    <div className='star-icon'>
    <i class="fa-regular fa-star"></i>
    </div>
    <button id='share'>
    <span>Share</span>
    <i class="fa-solid fa-arrow-up-from-bracket"></i>
    </button>
    <button id='attend'>
      Attend
    </button>
  </div>
    </section>
  )
}

export default StickBar