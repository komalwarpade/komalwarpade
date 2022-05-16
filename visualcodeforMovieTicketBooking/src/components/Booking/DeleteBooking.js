import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


function DeleteBooking() {
    const[booking, setBooking] = useState(null)
    const { bookingId } = useParams();
    const fetchBookingById = () => {
      
        axios.get("http://localhost:8085/booking/get/" + bookingId).then(resp => setBooking(resp.data))
    }
    useEffect(fetchBookingById, []);
    const deleteBooking  = () => {
        axios.delete("http://localhost:8085/booking/delete/"+bookingId).then(resp => alert(resp.data));
       
    }
    return (
        <div>
            <h2>Booking Details</h2>
            {
                booking !== null &&
                <div>
                    
                    <p>bookingId: {booking.bookingId}</p>
                    <p>noOfTickets: {booking.noOfTickets}</p>
                    
                   <p>showDate: {booking.showDate}</p> 
                   <p>theaterId: {booking.showDate}</p> 
                   <p>movieId: {booking.movieId}</p> 
                   <p>showId: {booking.showId}</p> 
                   
                </div>
            }
            <div><button onClick={deleteBooking}>Delete</button></div>
            
        </div>
        
    )
    
}

export default DeleteBooking;