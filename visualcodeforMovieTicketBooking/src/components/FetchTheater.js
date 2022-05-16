import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FetchTheater() {

    const [theater, setTheater] = useState(null);

    const { id } = useParams();

    const fetchTheaterById = () => {
        axios.get("http://localhost:8085/api/theater/viewTheater/" + id).then(resp => setTheater(resp.data))
    }
    useEffect(fetchTheaterById, []);
    return (
        <div className="Dash conatiner-fluid">
            <h2>
            <b>
                <u style={{color:"lightblue"}}>Theater Details</u>
            </b>
            </h2>
            {
                theater !== null &&
                <div className='App'>
                    <div class="h4">
                    <ul class="list-group">
                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">Theater_ID </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterName}</p>
                        <li class="">Theater Name</li>
                        </div>


                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.city}</p>
                        <li class="">City </li>
                        </div>

            
                        {/* <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.address}</p>
                        <li class="">Address </li>
                        </div> */}

                    
                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.phone}</p>
                        <li class="">Phone</li>
                        </div>
                        </ul>
                </div>
                </div>
            };
        </div>
    )
}
export default FetchTheater;