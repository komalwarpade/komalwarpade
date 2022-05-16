import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function DeleteShow() {

    const[show, setShow] = useState(null)

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchShowById = () => {
        axios.get("http://localhost:8085/api/movieShow/viewMovieShow/" + id).then(resp => setShow(resp.data))
    }

    useEffect(fetchShowById, []);
    const DeleteShow  = () => {
        axios.post("http://localhost:8085/api/movieShow/deleteMovieShow/"+id).then(resp => alert("Show is deleted:" +resp.data));
    navigate(-1);
    }
    return (
        
        <div>
            <h2>Added Show Timings</h2>
            {
                show !== null &&
                <div className='App'>
                <div class="h5">
                    <p>Show_ID: {show.showId}</p>
                    <p>Start Time: {show.startTime}</p>
                    <p>End Time: {show.endTime}</p>
                </div>
                </div>
            }
            <div><button onClick={DeleteShow}>Delete<p class="h3"></p></button></div>
        </div>
    )
}
export default DeleteShow;