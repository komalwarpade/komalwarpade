import axios from "axios";
import React, { useState } from "react";
import Navbar from "../util/navbar";
//import { Link } from "react-router-dom";
//import '../components/';
import "./CreateMovie.css";

function CreateMovie() {
    const [movie, setMovie] = useState({
        title: "",
        duration: "",
        genre: "",
        storyLine:"",
        language:"",
    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
        setMovie(movie => ({ ...movie, [event.target.name]: event.target.value }));

    }


    const handleSubmit = () => {

        let errors = {};

        if (!movie.title) {
            errors['movieNameErr'] = "Movie Name is Required";
        }
        if (!movie.duration) {
            errors['movieDurationErr'] = "Movie Duration is Required";
        }
        else if (movie.duration < 0) {
            errors['movieDurationErr'] = "Enter Correct Duration";

        }
        if (!movie.genre) {
            errors['movieGenreErr'] = "Movie Genre is Required";
        }
        if (!movie.storyLine) {
            errors['moviestoryLineErr'] = "Movie storyLine is Required";
        }


        if (!movie.language) {
            errors['movielanguageErr'] = "Movie language is Required";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                title: movie.title,
                duration: movie.duration,
                genre: movie.genre,
                storyLine:movie.storyLine,
                language:movie.language,

            }
            axios.post("http://localhost:8085/api/movie/add", payload)
                .then(resp => alert("movie saved"));

        }

    }


    return (
        <div>
<Navbar/>
      
          <div className='container-fluid' style={{padding:"0px"}}>
        <div className="siva d-flex justify-content-center align-items-center pt-3 mt-0"   >
           
            <div className="card w-25" style={{background:"rgba(0,0,0,0.5)",boxShadow:"0 5px 15px rgba(0,0,0,0.5)"}} >
                {/* <h2>ADD MOVIE</h2> */}
                <div className="card-header " style={{backgroundColor:"rgba(209,209,209,0.5)",boxShadow:"0 5px 15px rgba(0,0,0,0.5)"}}>
                   <h3><strong>ADD MOVIE</strong></h3>
                </div>
                <div className="card-body">
                <div className="container">

                    <div className="row">
                        


                        <div className="col-12 mb-3"  >
                            <label style={{float:"left",margin:"0px",color:"white"}}>Movie Title:</label>
                            <input type="text" className="form-control" id="name" name="title" value={movie.title} onChange={handleChange} style={{fontWeight:"700" }} />
                            {
                                formErrors.movieNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieNameErr}</div>
                            }
                        </div>
                        <div className="col-12 mb-3">
                            <label style={{float:"left",margin:"0px",color:"white"}}>Duration:</label>
                            <input type="number" className="form-control" name="duration" value={movie.duration} onChange={handleChange} style={{fontWeight:"700" }} />
                            {
                                formErrors.movieDurationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieDurationErr}</div>
                            }
                        </div>
                        <div className="col-12 mb-3">
                            <label style={{float:"left",margin:"0px",color:"white"}}>Genre:</label>
                            <input type="text" className="form-control" name="genre" value={movie.genre} onChange={handleChange} style={{fontWeight:"700" }} />
                            {
                                formErrors.movieGenreErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieGenreErr}</div>
                            }
                        </div>
                        <div className="col-12 mb-3">
                        <label style={{float:"left",margin:"0px",color:"white"}} >StoryLine:</label>
                    {/* <input type="text" className="form-control"  name="storyLine" value={movie.storyLine} onChange={handleChange} style={{fontWeight:"700" }} /> */}
                    <textarea type="text" className="form-control"  name="storyLine" value={movie.storyLine} onChange={handleChange} style={{fontWeight:"700" }} ></textarea>
                    
                    {
                formErrors.moviestoryLineErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.moviestoryLineErr}</div>
            }
                </div>

                <div className="col-12 mb-3">
                <label style={{float:"left",margin:"0px",color:"white"}} >Language:</label>
                    <input type="text" className="form-control"  name="language" value={movie.language} onChange={handleChange} style={{fontWeight:"700" }} />
                    {
                formErrors.movielanguageErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movielanguageErr}</div>
            }

                </div>

                        <div className="col-12 d-flex justify-content-around">
                            <button onClick={handleSubmit} className="btn btn-success mr-2" style={{fontSize:"15px"}}>Submit</button>
                            <button className="btn btn-danger" style={{fontSize:"15px"}} onClick={() => { window.location.href = "/movie/add" }}>Cancel</button>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        
        
        




    )
}
export default CreateMovie;