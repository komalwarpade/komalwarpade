import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetAllBooking() {
  const [bookings, setBookings] = useState([]);

  const fetchAll = () => {
    axios
      .get("http://localhost:8085/booking/all")
      .then((resp) => setBookings(resp.data));
  };
  useEffect(fetchAll, []);
  return (
    <div>
      <div className="container-fluid">
        <h3>All Bookings</h3>
        <table className="table table-bordered">
          <thead>
            <tr className='table-danger'>
            
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
              <th>BOOKING ID</th>
              <th>NO OF TICKETS</th>
              <th>TOTAL AMOUNT</th>
              <th>SHOW DATE</th>
              <th>THEATER ID</th>
              <th>MOVIE ID</th>
              <th>SHOW ID</th>
              <th>BOOKING DATE TIME </th>
              <th>STATUS</th>
              <th>VIEW</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={index} class="table-success">
                {/* <td>{index + 1}</td> */}
                
                <td>{b.bookingId}</td>
                <td>{b.noOfTickets}</td>
                <td>{b.totalAmount}</td>
                <td>{b.showDate}</td>
                <td>{b.theaterId}</td>
                <td>{b.movieId}</td>
                <td>{b.showId}</td>
                <td>{b.bookingDateTime}</td>
                <td>{b.status}</td>
                
                
                <td>
                  
                  
                  <td><Link to ={`/fetchbooking/${b.bookingId}`}className="btn btn-outline-info">View</Link></td>
                                    <td><Link to ={`/deleteBooking/${b.bookingId}`}className="btn btn-outline-secondary">Delete</Link></td>
                  

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* <div>
        <Link to="/">Back To Dashboard</Link>
      </div>
       */}
    </div>
  );
}

export default GetAllBooking;