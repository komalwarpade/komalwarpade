import React,{ useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router';

function UpdateShow() {
    const [show, setShow] = useState({
            showId: "",
            startTime: "",
            endTime: ""

    });

    const {id} = useParams();
    const navigate = useNavigate();

    const fetchShowById = () => {
        axios.get("http://localhost:8085/api/movieShow/viewMovieShow/" +id).then(resp => setShow(resp.data))
    }

    useEffect(fetchShowById, []);
    
    const handleChange=(event)=>{
        setShow(show => ({...show,[event.target.name] : event.target.value}));
        }

    const handleSubmit=() => {
        const payload ={
                showId: show.showId,
                startTime: show.startTime,
                endTime: show.endTime
            
              }
        axios.put("http://localhost:8085/api/movieShow/update",payload)
        .then(resp=>alert("Show Timings are updated successfully:" + resp.data.showId));

        navigate(-1);
    }

        return(
            <div className="App">
       <div class="alert alert-primary" role="alert">
           <p class="h2">UPDATE SHOW TIMINGS..!</p>
                  </div>
                  <div class="h4">
                  <ul class="list-group">
                <div class="list-group-item">
                    <label>Show_ID</label>
                    <li class=""> </li>
                    <input type="number" name="showId" value={show.showId} onChange={handleChange}/>
                </div>
                <div>
                    <label>Start Time</label>
                    <input type="time" name="startTime" value={show.startTime} onChange={handleChange}/>
                </div>
                <div>
                    <label>End Time</label>
                    <input type="time" name="endTime" value={show.endTime} onChange={handleChange}/>
                </div>
                </ul>
                </div>
                <div class="h4">
                    <button onClick={handleSubmit}>Update</button>
                </div>
            </div>
        )
}
export default UpdateShow;