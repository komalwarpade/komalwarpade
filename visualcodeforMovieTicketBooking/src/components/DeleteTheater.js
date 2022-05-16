import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function DeleteTheater() {

    const[theater, setTheater] = useState(null)

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTheaterById = () => {
        axios.get("http://localhost:8085/api/theater/viewTheater/" + id).then(resp => setTheater(resp.data))
    }

    useEffect(fetchTheaterById, []);
    const DeleteTheater  = () => {
        axios.post("http://localhost:8085/api/theater/deleteTheater/"+id).then(resp => alert("Theater details are deleted:" +resp.data));
    navigate(-1);
    }
    return (
        <div>
            <h2>Theater Details</h2>
            {
                theater !== null &&
                <div class="h4">
                    <ul class="list-group">

                    <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">Theater_ID </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">Theater Name </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">City </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">Address </li>
                        </div>

                        <div class="list-group-item">
                        <p style={{color:"brown"}}> {theater.theaterId}</p>
                        <li class="">Phone </li>
                        </div>
                        </ul>
                </div>
            }
            <div>
                <button onClick={DeleteTheater}><p class="h4">Delete</p></button></div>
        </div>
    )
}
export default DeleteTheater;