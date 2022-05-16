import React , { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from "../util/navbar";
// import { Navbar } from "react-bootstrap";
// import Navbar from './util/navbar';




function FetchAllMovies(){
    const [movies,setMovies] = useState([]);
    const fetchAll=()=>{axios.get("http://localhost:8085/api/movie/findall").then(res=>setMovies(res.data))}
    useEffect(fetchAll,[]);
    
    


    return(

        <div>

<Navbar/>

        
            <div className='vinay container-fluid' style={{color:"white",padding:"0"}} >
                
                
                <h3 style={{background:"rgba(0,0,0,0.5)",margin:"0px"}}><strong>LIST OF MOVIES</strong></h3>
                <table className="table table-bordered" style={{background:"rgba(0,0,0,0.5)",color:"white",width:"100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DURATION</th>
                            <th>GENRE</th>
                            <th>STORYLINE</th>
                            <th>LANGUAGE</th>
                            <th>VIEW</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {
                            movies.map((m, index) => (
                                <tr key={index}>
                                    <td> {m.movieId}</td>
                                    <td>  {m.title}</td>
                                    <td>  {m.duration} Hrs</td>
                                    <td>{m.genre}</td>
                                    <td>{m.storyLine}</td>
                                    <td>{m.language}</td>
                                    <td><Link to ={`/Details/${m.movieId}`}className="btn btn-outline-info">VIEW</Link></td>
                                    <td><Link to ={`/Details/edit/${m.movieId}`}className="btn btn-outline-secondary">EDIT</Link></td>
                                    
                                    
                                </tr>
                            )
                            )
    
                        }
    
                    </tbody>
                </table>
   
            </div>
            </div>
        )
    



}
export default FetchAllMovies;