import React from 'react'
import { Link } from 'react-router-dom'

 function Dashboard() {
  return (
    <div>
      <h3>Movie Ticket Booking</h3>
         <p><Link to ="/bookings">Click here for see the bookings</Link></p>
            <p><Link to ="/addbooking">add booking</Link></p>
            <p><Link to ="/deleteBooking">DeleteBooking </Link></p>
           
           
    </div>
  )
}
export default Dashboard;