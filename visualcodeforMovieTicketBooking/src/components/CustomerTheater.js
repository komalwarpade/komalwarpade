import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CustomerTheater() {
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
                        
                
                    </tr>
                    )
                }
                    </tbody>
                
                </table>
                <button><Link to="/CustomerMenuBar">Customer Dashboard</Link></button>
               
            </div>
    )
            }
export default CustomerTheater;