import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function FetchAllShows() {
   const [shows, setShows] = useState([]);

   const fetchAll=()=>{
    axios.get("http://localhost:8085/api/movieShow/getall").then(resp => setShows(resp.data))
   }
   useEffect(fetchAll,[]);

    return(
        <div className='container-fluid'>

            <h3>Show Timings</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Show_ID</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>View Show Timings</th>
                            <th>Update Show Timings</th>
                            <th>Delete Show Time </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    shows.map((p, index) => 
                    <tr key={index}>
                        <td>{p.showId}</td>
                        <td>{p.startTime}</td>
                        <td>{p.endTime}</td>
                        <td><Link to={`/show/get/${p.showId}`}>View</Link></td>
                        <td><Link to={`/show/update/${p.showId}`}>Update</Link></td>
                        <td><Link to={`/show/delete/${p.showId}`}>Delete</Link></td>
                        

                
                    </tr>
                    )
                }
                    </tbody>
                
                </table>
                <button><Link to="/show/add">ADD SHOW</Link></button>
                <button><Link to="/AdminMenuBar">ADMIN Dashboard</Link></button>
            </div>
    )
            }
export default FetchAllShows;