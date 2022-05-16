import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddTheaterMovie from "./AddTheaterMovie";
function FetchTheaterMovie() {
    
    const [theaterMovie, setThearterMovie] = useState(null);
    const { id } = useParams();

    const fetchbookingById = () => {
        axios.get("http://localhost:8085/theatermovie/view/{theaterId}" + id).then(resp=>setThearterMovie(resp.data))
    }
    useEffect(fetchbookingById, []);

    return (
        <div>
            <h2>THEATER MOVIE DETAILS</h2>
            {
                theaterMovie!== null &&

                <div>
                    {/* id: "",  
  movieId: "",
  theaterId: "",
  showId: "",
  costPerTicket: "", */}


                    <p>id: {theaterMovie.id}</p>
                    <p>movieId: {theaterMovie.movieId}</p>
                    <p>theaterId: {theaterMovie.theaterId}</p>

                    <p>showId: {theaterMovie.showId}</p>
                    <p>costPerTicket: {theaterMovie.costPerTicket}</p>


                </div>

            }
            <p>
                <Link to="/fetchByTheaterId">Click here to get back</Link></p>

        </div>
    )
}
export default FetchTheaterMovie;