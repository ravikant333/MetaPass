import React from "react";
import Attendees from "./Attendees";
import StickBar from "./StickBar";

const EventDetail = () => {
  return (
    <div className="event-detail">
      <div className="detail">
        <div className="discription">
          <img src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508865539%2F676x380.webp&w=1920&q=75"></img>
          <article className="event-info">
            <h3>Details</h3>
            <p>
              Join us for our second SolidJS IRL event in NYC!<br></br> Here's what will
              go down: Welcome and updates from Core Team (Ryan Carniato and
              David Di Biase will be in-person!)<br></br> Demonstration and introduction
              to SolidJS Community & ecosystem demos - we'll have a screen if
              needed Advanced discussion and Q&A This is a great opportunity to
              learn about Solid and to discuss ideas on how to improve the
              project. Members from the Core, Ecosystem, and Docs Teams will be
              in attendance.<br></br> Drinks and light food will be available at the
              event. <br></br>A﻿ special thank you to our sponsors and hosts at
              Babbel.com who've made this event possible.
            </p>
          </article>
        </div>
        <Attendees/>
      </div>

      <div id="time">
        <div className="info">
          <img src="https://secure-content.meetupstatic.com/images/classic-events/508865620/56x56.jpg?w=56?w=128"></img>
          <div>
            <h2>SolidJS </h2>
            <p > Public Group</p>
          </div>
        </div>
        <div className="time-info">
          <time className="date">
          <i class="fa-regular fa-clock"></i>Tuesday, December 13, 2022 at 6:30 PM to Tuesday, December 13, 2022
            at 9:30 PM EST
          </time>
          <div className="address date">
          <i class="fa fa-location-dot"></i>285 Madisone Ave ,NewYork ,NYC</div>
        </div>
      </div>
      <StickBar/>
    </div>
  );
};

export default EventDetail;
