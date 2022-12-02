import React from 'react'

const EventTitle = () => {
  return (
   <section className='event-title'>
    <h2> SolidJS NYC December Meetup</h2>
    <div className='hoster'>
     <span>
        <img src='https://secure-content.meetupstatic.com/images/classic-member/310880278/45x45.jpg'></img>
     </span>
      <div className='hosted-by'>
        <span>Hosted By</span>
        <span id='hoster-name'>SolidJS C.</span>
      </div>
    </div>
   </section>
  )
}

export default EventTitle