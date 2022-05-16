import React, { useState } from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
function AddBooking() {
    const [booking,setBooking] = useState({
            customerId: "",
           noOfTickets: "",
           
           showDate: "",
           theaterId: "",
           movieId: "",
           showId:"",
           customerId:""

          
    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
        setBooking(booking => ({ ...booking, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        let errors = {};
        
        if (!booking.noOfTickets) {
            errors['noOfTicketsErr'] = "Enter No of Tickets";
        }
        
        
        if (!booking.showDate) {
            errors['showDateErr'] = "Enter ShowDate";
        }
        if (!booking.theaterId) {
            errors['theaterIdErr'] = "Enter TheaterId";
        }
        if (!booking.movieId) {
            errors['movieIdErr'] = "Enter MovieID";
        }
        if (!booking.showId) {
            errors['showIdErr'] = "Enter ShowId";
        }
        
        if (!booking.customerId) {
            errors['customerIdErr'] = "Enter customerId";
        }
        
    
         {/* {
    "bookingId": 18,
    "noOfTickets": 2,
    "totalAmount": 200,
    "showDate": "2022-05-12",
    "theaterId": 13,
    "movieId": 10,
    "showId": 11,
    "bookingDateTime": "2022-05-12T12:10:33.688357",
    "status": "Booked"
  }
                 */}
                
    
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        const payload = {
           
           noOfTickets: booking.noOfTickets,
           customerId:booking.customerId,

            showDate:  booking.showDate,
            theaterId: booking.theaterId,
            movieId:booking.movieId,
            showId:booking.showId
            
           
        }
axios.post("http://localhost:8085/booking/add", payload).then(resp => alert("Booking saved "+resp.data.customerId));

    }
}
        return (
            <div>
                <h2 style={{ color: 'red' }}><b>Please Enter The Following Details</b></h2>
                
                <div>
                    <label>NO OF TICKETS</label>
                    <input type="number" name="noOfTickets" value={booking.noOfTickets} onChange={handleChange} />
                    {
                    formErrors.noOfTicketsErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.noOfTicketsErr}</div>
                }
                </div>
                
                
                
                <div>
                    <label>SHOW DATE</label>
                    <input type="date" name="showDate" value={booking.showDate} onChange={handleChange} />
                    {
                    formErrors.showDateErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.showDateErr}</div>
                }
                </div>
                <div>
                    <label>THEATER ID</label>
                    <input type="number" name="theaterId" value={booking.theaterId} onChange={handleChange} />
                    {
                    formErrors.theaterIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.theaterIdErr}</div>
                }
                </div>

                <div>
                    <label>MOVIE ID</label>
                    <input type="number" name="movieId" value={booking.movieId} onChange={handleChange} />
                    {
                    formErrors.movieIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieIdErr}</div>
                }
                </div>
                <div>
                    <label>SHOWID</label>
                    <input type="number" name="showId" value={booking.showId} onChange={handleChange} />
                    {
                    formErrors.showIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.showIdErr}</div>
                }
                </div>
                
               
                <div>
                    <label>CUSTOMER ID</label>
                    <input type="number" name="customerId" value={booking.customerId} onChange={handleChange} />
                    {
                    formErrors.customerIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.customerIdErr}</div>
                }
                </div>
               

                
                <div>
                    <button onClick={handleSubmit}>Save</button>
                </div>
                <p><Link to ="/CustomerMenuBar">Click here to get back to Booking List</Link></p>
            </div>
        )
    }

export default AddBooking;