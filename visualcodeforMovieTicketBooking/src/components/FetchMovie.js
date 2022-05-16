import axios from "axios";
import React,{useEffect,useState} from "react";
// import { Navbar } from "react-bootstrap";
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from "../util/navbar";

import "./CreateMovie.css";
function FetchMovie(){
    const [movie,setMovie]=useState(null);
    const {movieId} = useParams();

    const fetchmovieById=()=>{
        axios.get("http://localhost:8085/api/movie/viewMovie/"+ movieId).then(resp=>setMovie(resp.data))
    }
    useEffect(fetchmovieById,[]);

    return(
        <div>
<Navbar/>            
        <div className=" mi d-flex justify-content-center align-items-center pt-3 mt-0" style={{height:"553px"}}  >
           
            <div className="card w-25" style={{background:"rgba(0,0,0,0.5)",boxShadow:"0 5px 15px rgba(0,0,0,0.5)",height:"auto"}} >
                {/* <h2>ADD MOVIE</h2> */}
                <div className="card-header " style={{backgroundColor:"rgba(209,209,209,0.5)",color:"white",boxShadow:"0 5px 15px rgba(0,0,0,0.5)"}}>
                   <h3 ><strong> MOVIE DETAILS</strong></h3>
                </div>
                <div className="card-body ">
                <div className="container  ">

                    <div className="row ">
{
                 movie !== null &&

                 <div className="" style={{color:"white",textAlign:"left"}}>
                
                
                <p> <strong>ID: </strong>{movie.movieId}</p>
                <p><strong> TITLE:</strong> {movie.title}</p>
                <p><strong> DURATION:</strong> {movie.duration} Hrs</p>
                <p><strong> GENRE: </strong> {movie.genre}</p>
                <p> <strong>STORYLINE:</strong> {movie.storyLine}</p>
                <p><strong> LANGUAGE:</strong> {movie.language}</p>
                </div>
                
                
        }
                        


                        
                       
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        





    )
}
export default FetchMovie;