import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./CreateMovie.css";
import Navbar from '../util/navbar';




function EditMovie(){
    const[movie,setMovie]=useState({
        movieId:"",
        title: "",
        duration: "",
        genre:"",
        storyLine:"",
        language:"",
    });
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const {movieId} = useParams();

    const fetchmovieById=()=>{
        axios.get("http://localhost:8085/api/movie/viewMovie/"+movieId).then(resp=>setMovie(resp.data))
    }
        useEffect(fetchmovieById,[]);

        const handleChange=(event)=>{
            setMovie( movie =>({...movie,[event.target.name]:event.target.value}));
    
        }
    
    
        const handleSubmit=()=>{
            let errors = {};

            if (!movie.title) {
                errors['movieNameErr'] = "Movie Name is Required";
            }
            if (!movie.duration) {
                errors['movieDurationErr'] = "Movie Duration is Required";
            }
            else if (movie.duration < 0) {
                errors['movieDurationErr'] = "Movie Duration is Required";
    
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
            if (noErrors)  {



            
            const payload={
                movieId:movie.movieId,
                title:movie.title,
                duration:movie.duration,
                genre:movie.genre,
                storyLine:movie.storyLine,
                language:movie.language
            }
           // navigate('/movies')
            axios.put("http://localhost:8085/api/movie/update",payload).then(resp=>alert("Movie updated successfully"));}
        }
       
            return(
                <div>
<Navbar/>
                 <div className="vamsi d-flex justify-content-center align-items-center pt-3 mt-0" style={{paddingBottom:"10px"}} >
            <div className="card w-25" style={{background:"rgba(0,0,0,0.3)"}}>
                {/* <h2>ADD MOVIE</h2> */}
                <div className="card-header " style={{backgroundColor:"#d3d3d3"}}>
                   <h3> UPDATE MOVIE</h3>
                </div>
                <div className="card-body">
                <div className="container">

                    <div className="row">


                    <div className="col-12 mb-3" >
                    <label style={{float:"left",margin:"0px",color:"white"}}>Movie ID:</label>
                    <input type="number" className="form-control"  name="movieId" value={movie.movieId}  style={{fontWeight:"700" }} disabled />
                </div>
                <div className="col-12 mb-3">
                    <label style={{float:"left",margin:"0px",color:"white"}} >Movie Name:</label>
                    <input type="text" className="form-control"  name="title" value={movie.title} onChange={handleChange}  style={{fontWeight:"700" }} />
                    {
                formErrors.movieNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieNameErr}</div>
            }
                </div>
                <div className="col-12 mb-3">
                    <label style={{float:"left",margin:"0px",color:"white"}}>Duration:</label>
                    <input type="number" className="form-control"  name="duration" value={movie.duration} onChange={handleChange}  style={{fontWeight:"700" }}/>
                    {
                formErrors.movieDurationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieDurationErr}</div>
            }
                </div>
                <div className="col-12 mb-3">
                    <label style={{float:"left",margin:"0px",color:"white"}}>Genre:</label>
                    <input type="text" className="form-control"  name="genre" value={movie.genre} onChange={handleChange}  style={{fontWeight:"700" }}/>
                    {
                formErrors.movieGenreErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movieGenreErr}</div>

            }
                </div>
                <div className="col-12 mb-3">
                    <label style={{float:"left",margin:"0px",color:"white"}} >StoryLine:</label>
                    <textarea type="text" className="form-control"  name="storyLine" value={movie.storyLine} onChange={handleChange}  style={{fontWeight:"700" }}> </textarea>
                    {
                formErrors.moviestoryLineErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.moviestoryLineErr}</div>
            }
                </div>
                <div className="col-12 mb-3">
                    <label style={{float:"left",margin:"0px",color:"white"}} >Language:</label>
                    <input type="text" className="form-control"  name="language" value={movie.language} onChange={handleChange}  style={{fontWeight:"700" }}/>
                    {
                formErrors.movielanguageErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.movielanguageErr}</div>
            }
                </div>
                




        
                <div className="col-12 d-flex justify-content-around">
                    <button onClick={handleSubmit} className="btn btn-success" >update</button>
                </div>
                {/* <p>
                <Link to ="/movies">Click here to get Movie List</Link></p> */}
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            )
        }
        





export default EditMovie;
