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
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                    shows.map((p, index) => 
                    <tr key={index}>
                        <td>{p.showId}</td>
                        <td>{p.startTime}</td>
                        <td>{p.endTime}</td>
                        

                
                    </tr>
                    )
                }
                    </tbody>
                
                </table>
                <button><Link to="/CustomerMenuBar">Customer Dashboard</Link></button>
              
            </div>
    )
            }
export default FetchAllShows;