import React,{ useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router';

function UpdateTheater() {
    const [theater, setTheater] = useState({
        theaterId: "",
        theaterName: "",
        city: "",
        address: "",
        phone: ""

    });

    const {id} = useParams();
    const navigate = useNavigate();

    const fetchTheaterById = () => {
        axios.get("http://localhost:8085/api/theater/viewTheater/" +id).then(resp => setTheater(resp.data))
    }

    useEffect(fetchTheaterById, []);
    
    const handleChange=(event)=>{
        setTheater(theater => ({...theater,[event.target.name] : event.target.value}));
        }

    const handleSubmit=() => {
        const payload ={
                theaterId: theater.theaterId,
                theaterName : theater.theaterName,
                city : theater.city,
                address: theater.address,
                phone: theater.phone
            
              }
        axios.put("http://localhost:8085/api/theater/update",payload)
        .then(resp=>alert("Theater Details are updated successfully:" + resp.data.theaterId));

        navigate(-1);
    }

        return(
            
            <div className="App">
       <div class="alert alert-primary" role="alert">
           <p class="h2">UPDATE DETAILS..!</p>
                  </div>
                  <div class="h4">
                  <ul class="list-group">
                <div class="list-group-item">
                    <label>Theater ID</label>
                    <li class=""> </li>
                    <input type="number" name="theaterId" value={theater.theaterId} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Theater Name</label>
                    <li class=" "></li>
                    <input type="text" name="theaterName" value={theater.theaterName} onChange={handleChange}/>
                </div>
                        <div class="list-group-item">
                    <label>City</label>
                    <li class=" "></li>
                    <input type="text" name="city" value={theater.city} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Address</label>
                    <li class=" "></li>
                    <input type="text" name="address" value={theater.address} onChange={handleChange}/>
                </div>
                <div class="list-group-item">
                    <label>Phone</label>
                    <li class=" "></li>
                    <input type="number" name="phone" value={theater.phone} onChange={handleChange}/>
                    </div>
                </ul>
                     </div>
                <div>
                    <button onClick={handleSubmit}><p class="h2">Update</p></button>
                </div>
                </div>
        )
}
export default UpdateTheater;