import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FetchTheaterMovie() {

    const [theatermovie, setTheaterMovie] = useState(null);

    const { id } = useParams();

    const fetchTheaterMovieById = () => {
        axios.get("http://localhost:8085/theatermovie/view/" + id).then(resp => setTheaterMovie(resp.data))
    }
    useEffect(fetchTheaterMovieById, []);
    return (
        <div className="Dash conatiner-fluid">
            <h2>
            <b>
                <u style={{color:"lightblue"}}>TheaterMovie Details</u>
            </b>
            </h2>
            {
                theatermovie !== null &&
                <div className='App'>
                    <div class="h4">
                    <ul class="list-group">
                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theatermovie.id}</p>
                        <li class="">ID </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theatermovie.theaterId}</p>
                        <li class="">Theater_ID</li>
                        </div>


                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theatermovie.showId}</p>
                        <li class="">Show_ID </li>
                        </div>

            
                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theatermovie.movieId}</p>
                        <li class="">Movie_ID </li>
                        </div>

                    
                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theatermovie.costPerTicket}</p>
                        <li class="">Cost Per Ticket </li>
                        </div>
                        </ul>
                </div>
                </div>
            };
        </div>
    )
}
export default FetchTheaterMovie;