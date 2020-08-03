import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import './App.css'

import Home from './Home'

const name = 'Brandon & Laura'
export const siteTitle = 'Brandon & Laura'

export default function Layout({ children, home }) {
  const [activeClass, setActiveClass] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    var startDateTime = new Date(2019, 10, 6, 23, 59, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
    var startStamp = startDateTime.getTime();

    var newDate = new Date();
    var newStamp = newDate.getTime();

    var timer; // for storing the interval (to stop or pause later if needed)

    function updateClock() {
        newDate = new Date();
        newStamp = newDate.getTime();
        var diff = Math.round((newStamp-startStamp)/1000);
        
        var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
        diff = diff-(d*24*60*60);
        var h = Math.floor(diff/(60*60));
        diff = diff-(h*60*60);
        var m = Math.floor(diff/(60));
        diff = diff-(m*60);
        var s = diff;


        setTime(d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds")
        // document.getElementById("time-elapsed").innerHTML = d+" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) working";
    }

    timer = setInterval(updateClock, 1000);

    window.addEventListener('scroll', () => {
      let navBackgroundClass = '';
      if (window.scrollY > 1) {
        navBackgroundClass = 'navbar-container-background';
      }
      setActiveClass(navBackgroundClass);
    });

    
  })

  return (
    <div id="bootstrap-overrides">
      <Navbar className={activeClass + " navbar-container fixed-top justify-content-around"}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="justify-content-around w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="home" className="homepage">
        <br></br>
        <img
          src="https://lh3.googleusercontent.com/Zc_cLDwXBD6WVeQcz0fWC60ZLvy0RX3X1Ca9dHvPDPXU-epPYnLx3hdkzn98nWvwRirvHrFnG4T95Z1wqxOLkThKVfUDn0bWlZjle2eEdB7yGaVG4TmZVUD3WQObeWj7Xhz1jctoBLo3h75fkA8eI8-ognuzr0njlCmKcmLOvIimdMq_MaI9IiLmzAtIZPZHAAqV2t6rMPyKyXjskk3EziQJnWnCG3XMJnFY_Y-v0A1uhFH4nqWIB0yKfN4B19YnsTb_diMnhkbLYexgevgWU8EqAMfQGFCRogeNc8euuYBwTp9PnlnUUe6u0WzWymzg17FWQtnoo_RqiDnHRnbgqYGx0BYzaif-Sv1O4LktISAlhkjAgUFo20j_PwsKZc_EnFSal1-wMsJ6SFyZX3XY0l62lNjDTxkLndaNM4k60BKR1rik15jOpkiimAs-rAf53sEHScaSNowKHrPXj2MEljWmIZzuxFWNRZQw6jvKT7ZkZia2ZwoDtWvpqxmv4sK2TCeFlf0ob47Zz9jEeGeN0kHjEfRi0IbTfmefTOBwnAPOd12qNU4TtWZZLBMd4-c_IxrAWIZy4xlOYRINq7NFR1dW7bd4hw0Zb4sIes6qWgKWkQ6KELQZTBbwSdbcSSJPQpjkwb3bitD0qElntiM_L6h8iBSKrgmiFl8YJ6WEOze-wVDTYtcwiuaYPX6P=w692-h921-no?authuser=0"
          className="headerHomeImage borderCircle"
          alt={name}
        />
        <h1 className="heading2Xl">{name}</h1>
        <b><p className="datingClock">Together for</p></b>
        <b><p className="datingClock">{time}</p></b>
      </div>
      <Home />
      <div className="footer">
        <p>For my Laura :)</p>
      </div>
    </div>
  )
}
