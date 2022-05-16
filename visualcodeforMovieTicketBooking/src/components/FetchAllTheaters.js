import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function FetchAllTheaters() {
   const [theaters, setTheaters] = useState([]);

   const fetchAll=()=>{
    axios.get("http://localhost:8085/api/theater/getall").then(resp => setTheaters(resp.data))
   }
   useEffect(fetchAll,[]);

    return(
        <div className='container-fluid'>
            <h3>List of Theater details added</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr style={{ backgroundColor:"ButtonHighlight" }}>

                            <th>Sr No</th>
                            <th>Theater Id</th>
                            <th>Theater Name</th>
                            <th>City</th>
                            <th>View Show Details</th>
                            <th>Update Show Details</th>
                            <th>Delete Show Details </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    theaters.map((p, index) => 
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{p.theaterId}</td>
                        <td>{p.theaterName}</td>
                        <td>{p.city}</td>
                        <td><Link to={`/theater/get/${p.theaterId}`}>View</Link></td>
                        <td><Link to={`/theater/update/${p.theaterId}`}>Update</Link></td>
                        <td><Link to={`/theater/delete/${p.theaterId}`}>Delete</Link></td>

                
                    </tr>
                    )
                }
                    </tbody>
                
                </table>
                <button><Link to="/theater/add">ADD THEATER </Link></button>
                <button><Link to="/AdminMenuBar">ADMIN Dashboard</Link></button>
            </div>
    )
            }
export default FetchAllTheaters;