import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FetchShow() {

    const [show, setShow] = useState(null);

    const { id } = useParams();

    const fetchShowById = () => {
        axios.get("http://localhost:8085/api/movieShow/viewMovieShow/" + id).then(resp => setShow(resp.data))
    }
    useEffect(fetchShowById, []);
    return (
        <div class color="brown">
            
            <h2>Show Details</h2>
            {
                show !== null &&
                <div className='App'>

                    <p class="h4">Show_ID: {show.showId}</p>
                    <p class="h4">Start Time: {show.startTime}</p>
                    <p class="h4">End Time: {show.endTime}</p>
                </div>
            }
        </div>
    )
}
export default FetchShow;