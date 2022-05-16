import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
function AddTheaterMovie() {
    const [TheaterMovie, setThearterMovie] = useState({
      id: "",  
    movieId: "",
    theaterId: "",
    showId: "",
    costPerTicket: "",

    })
    const [formErrors, setFormErrors] = useState({})
    const handleChange = (event) => {
        setThearterMovie(TheaterMovie => ({ ...TheaterMovie, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        let errors = {};
        if (!TheaterMovie.id) {
            errors['idErr'] = "Enter id ";
        }
        if (!TheaterMovie.movieId) {
            errors['movieIdErr'] = "Enter movieId";
        }
        if (!TheaterMovie.theaterId) {
            errors['theaterIdErr'] = "Enter theaterId";
        }
        if (!TheaterMovie.showId) {
            errors['showIdErr'] = "Enter showId";
        }
        if (!TheaterMovie.costPerTicket) {
            errors['costPerTicketErr'] = "Enter costPerTicket";
        }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                id: this.state.id,
                movieId: this.state. movieId,
                theaterId:this.state.theaterId,
                showId:this.state.showId,
                costPerTicket:this.state.costPerTicket,
            }
            axios.post("http://localhost:8085/theatermovie/add", payload).then(resp => alert("Theater Movie Added"));

        }
    }
    return (
        <div>
            <h2 style={{ color: 'blue' }}><b>Please Enter The Following Details</b></h2>
            <div>
                <label>ID</label>
                <input type="number" name="id" value={TheaterMovie.id} onChange={handleChange} />
                {
                    formErrors.idErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.idErr}</div>
                }
            </div>
            <div>
                <label>MOVIEID</label>
                <input type="number" name="movieId" value={TheaterMovie.movieId} onChange={handleChange} />
                {
                    formErrors.movieIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieIdErr}</div>
                }
            </div>
            <div>
                <label> THEATER ID</label>
                <input type="number" name="theaterId" value={TheaterMovie.theaterId} onChange={handleChange} />
                {
                    formErrors.theaterIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.theaterIdErr}</div>
                }
            </div>
            <div>
                <label> SHOW ID</label>
                <input type="number" name="showId" value={TheaterMovie.showId} onChange={handleChange} />
                {
                    formErrors.showIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.showIdErr}</div>
                }
            </div>
            <div>
                <label> COST PER TICKET</label>
                <input type="number" name="costPerTicket" value={TheaterMovie.costPerTicket} onChange={handleChange} />
                {
                    formErrors.costPerTicketErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.costPerTicketErr}</div>
                }
            </div>
            

            <div>
                <button onClick={handleSubmit}>Save</button>
            </div>
            <p><Link to="/addTheaterMovie">Click here to get back </Link></p>
        </div>
    )
}

export default AddTheaterMovie;