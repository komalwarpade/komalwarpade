import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function FetchAllTheaterMovies() {
   const [theatermovies, setTheaterMovies] = useState([]);

   const fetchAll=()=>{
    axios.get("http://localhost:8085/theatermovie/all").then(resp => setTheaterMovies(resp.data))
   }
   useEffect(fetchAll,[]);

    return(
        <div className='container-fluid'>
            <h3>List of Theater Movie details</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr style={{ backgroundColor:"ButtonHighlight" }}>

                            
                            <th>ID</th>
                            <th>Movie Id</th>
                            <th>Theater ID</th>
                            <th>Show Id</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {
                    theatermovies.map((p, index) => 
                    <tr key={index}>
                       
                        <td>{p.id}</td>
                        <td>{p.movieId}</td>
                        <td>{p.theaterId}</td>
                        <td>{p.showId}</td>
                        

                
                    </tr>
                    )
                }
                    </tbody>
                
                </table>
                <button><Link to="/CustomerMenuBar">Customer Dashboard</Link></button>
                
            </div>
    )
            }
export default FetchAllTheaterMovies;