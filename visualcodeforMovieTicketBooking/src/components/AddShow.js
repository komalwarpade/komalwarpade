import React, {useState} from "react";
import axios from "axios";

import { useNavigate} from "react-router";
import { Link } from "react-router-dom";

function AddShow(){
    const [show, setShow]=useState({
            showId: "",
            startTime: "",
            endTime: ""

})

const navigate = useNavigate();

const [formErrors, setFormErrors] = useState({});

    const handleChange=(event)=> {
        setShow(show => ({...show,[event.target.name]: event.target.value}));
    }
    const handleSubmit=()=> {

        let errors ={};

        if(!show.showId){
            errors['showIdErr'] = "Please Enter ShowId";
        }
        if(!show.startTime){
            errors['startTimeErr'] = "Movie Start Time is required";
        }
        if(!show.endTime){
            errors['startTimeErr'] = "Movie End Time is required";
        }

        setFormErrors(errors);
        const noErrors=Object.keys(errors).length===0;
        if (noErrors){
            const payload ={
                showId: show.showId,
                startTime: show.startTime,
                endTime: show.endTime

            
              }
        axios.post("http://localhost:8085/api/movieShow/add",payload).then(resp=>alert("Show timing details  are added"+resp.data.showId));
    navigate(-1);
    }
}

        return(
            <div class color="brown">
                      <div class="alert alert-info" role="info">
                          
                          <p class="h2">Add Show Timings..!</p>
                          <div class="h4">
                    <label>Show_ID</label>
                    <input type="number" name="showId" value={show.showId} onChange={handleChange}/>
                    {
                        formErrors.showIdErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.showIdErr}
                        </div>
                    }
                    </div>
                </div>
                <div class="h4">
                    <label>Start Time</label>
                    <input type="time" name="startTime" value={show.startTime} onChange={handleChange}/>
                    {
                        formErrors.startTimeErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.startTimeErr}
                        </div>
                    }
                </div>
                <div class="h4">
                    <label>End Time</label>
                    <input type="time" name="endTime" value={show.endTime} onChange={handleChange}/>
                    {
                        formErrors.endTimeErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.endTimeErr}
                        </div>
                    }
                </div>
                <div class="h4">
                    <button onClick={handleSubmit}>Add</button>
                    <button><Link to="/show/get">Back</Link></button>
                </div>
            </div>
        )
    }
export default AddShow;