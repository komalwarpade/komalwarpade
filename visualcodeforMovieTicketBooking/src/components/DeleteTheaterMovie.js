import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function DeleteTheaterMovie() {

    const[theatermovie, setTheaterMovie] = useState(null)

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTheaterMovieById = () => {
        axios.get("http://localhost:8085/theatermovie/view/" + id).then(resp => setTheaterMovie(resp.data))
    }

    useEffect(fetchTheaterMovieById, []);
    const DeleteTheaterMovie  = () => {
        axios.post("http://localhost:8085/api/theaterMovie/deleteTheaterMovie/"+id).then(resp => alert("Theater Movie details are deleted:" +resp.data));
    navigate(-1);
    }
    return (
        <div>
            <h2>Theater Details</h2>
            {
                theatermovie !== null &&
                <div class="h4">
                <ul class="list-group">

                <div class="list-group-item">
                    <p style={{color:"brown"}}> {theatermovie.id}</p>
                    <li class="">ID </li>
                    </div>

                    <div class="list-group-item">
                    <p style={{color:"brown"}}> {theatermovie.theaterId}</p>
                    <li class="">Theater_ID </li>
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
            }
            <div><button onClick={DeleteTheaterMovie}><p class="h4"></p>Delete</button></div>
        </div>
    )
}
export default DeleteTheaterMovie;