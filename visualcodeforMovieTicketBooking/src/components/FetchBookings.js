import axios from "axios";
import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function FetchBookings(){
    const [booking,setBooking]=useState(null);
    const {bookingId} = useParams();

    const fetchbookingById=()=>{
        axios.get("http://localhost:8085/booking/get/"+ bookingId).then(resp=>setBooking(resp.data))
    }
    useEffect(fetchbookingById,[]);

    return(
        <div className="komal">
        <h2>Booking Details</h2>
        {
            booking !== null &&

            <div>
              
                <p>BOOKING Id: {booking.bookingId}</p>
                    <p>NO OF TICKETS: {booking.noOfTickets}</p>
                    <p>TOTAL AMOUNT:{booking.totalAmount}</p>
                   <p>SHOW DATE: {booking.showDate}</p> 
                   <p>THEATER ID: {booking.showDate}</p> 
                   <p>MOVIE ID: {booking.movieId}</p> 
                   <p>SHOW ID: {booking.showId}</p> 
                   <p>BOOKING DATE TIME : {booking.bookingDateTime}</p>
                   <p>STATUS: {booking.status}</p>
                </div>
                
        }
         <p>
         <Link to ="/allbookings">Click here to get back to Booking List</Link></p>
        
    </div>
    )
}
export default FetchBookings;






