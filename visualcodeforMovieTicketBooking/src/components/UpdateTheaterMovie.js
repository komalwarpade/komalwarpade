import React,{ useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router';

function UpdateTheaterMovie() {
    const [theatermovie, setTheaterMovie] = useState({
        id: "",
        theaterId: "",
        showId: "",
        movieId: "",
        costPerTicket: ""

    });

    const {id} = useParams();
    const navigate = useNavigate();

    const fetchTheaterMovieById = () => {
        axios.get("http://localhost:8085/api/theaterMovie/viewTheaterMovie/" +id).then(resp => setTheaterMovie(resp.data))
    }

    useEffect(fetchTheaterMovieById, []);
    
    const handleChange=(event)=>{
        setTheaterMovie(theatermovie => ({...theatermovie,[event.target.name] : event.target.value}));
        }

    const handleSubmit=() => {
        const payload ={
            id: theatermovie.id,
            theaterId: theatermovie.theaterId,
            showId : theatermovie.showId,
            movieId : theatermovie.movieId,
            costPerticket: theatermovie.costPerTicket
            
              }
        axios.put("http://localhost:8085/api/theaterMovie/update",payload)
        .then(resp=>alert("Theater Movie Details are updated successfully:" + resp.data.Id));

        navigate(-1);
    }

        return(
            <div className="App">
       <div class="alert alert-primary" role="alert">
           <p class="h2">UPDATE DETAILS..!</p>
                  </div>
                  <div class="h4">
                  <ul class="list-group">
                <div class="list-group-item">
                    <label>ID</label>
                    <li class=""> </li>
                    <input type="number" name="id" value={theatermovie.id} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Theater_ID</label>
                    <li class=" "></li>
                    <input type="number" name="theaterId" value={theatermovie.theaterId} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Show_ID</label>
                    <li class=" "></li>
                    <input type="number" name="showId" value={theatermovie.showId} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Movie_ID</label>
                    <li class=" "></li>
                    <input type="number" name="movieId" value={theatermovie.movieId} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Cost Per Ticket</label>
                    <li class=" "></li>
                    <input type="number" name="costPerTicket" value={theatermovie.costPerTicket} onChange={handleChange}/>
                </div>
                </ul>
                </div>
                <div>
                    <button onClick={handleSubmit}>UpdateTheaterMovie</button>
                </div>
            </div>
        )

}
export default UpdateTheaterMovie;