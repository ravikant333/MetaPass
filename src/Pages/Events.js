import React from 'react'
import EventDetail from '../Components/EventDetail'
import EventTitle from '../Components/EventTitle'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const Events = () => {
  return (
     <>
  <NavBar/>
  <EventTitle/>
  <EventDetail/>
  <Footer/>
     </>
  )
}

export default Events