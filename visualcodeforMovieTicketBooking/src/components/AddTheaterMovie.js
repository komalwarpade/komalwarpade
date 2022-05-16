import React, {useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router";

function AddTheaterMovie(){
    const [theatermovie, setTheaterMovie]=useState({
            id: "",
            theaterId: "",
            showId: "",
            movieId: "",
            costPerTicket: ""

})

const navigate = useNavigate();

const [formErrors, setFormErrors] = useState({});

    const handleChange=(event)=> {
        setTheaterMovie(theatermovie => ({...theatermovie,[event.target.name]: event.target.value}));
    }
    const handleSubmit=()=> {

        let errors ={};

        if(!theatermovie.id){
            errors['idErr'] = "Please Enter  ID";
        }
        else if(!theatermovie.id<0){
            errors['idErr'] = "Please a valid ID";
        }
        if(!theatermovie.theaterId){
            errors['theaterIdErr'] = "Theater Id is required";
        }
        else if(!theatermovie.theaterId<0){
            errors['theaterIdErr'] = "Please a valid TheaterId Number";
        }
        if(!theatermovie.showId){
            errors['showIdErr'] = "Please Enter Show Id";
        }
        else if(!theatermovie.showId<0){
            errors['showIdErr'] = "Please a valid Show Id";
        }
        if(!theatermovie.movieId){
            errors['movieIdErr'] = "Please Enter Movie Id";
        }
        else if(!theatermovie.movieId<0){
            errors['movieIdErr'] = "Please a valid Movie Id";
        }
        if(!theatermovie.costPerTicket){
            errors['costPerTicketErr'] = "Cost price is required";
        }
        else if(!theatermovie.costPerTicket<0){
            errors['costPerTicketErr'] = "Please enter a valid Cost Price";
        }

        setFormErrors(errors);
        const noErrors=Object.keys(errors).length===0;
        if (noErrors){
            const payload ={
                id: theatermovie.id,
                theaterId: theatermovie.theaterId,
                showId : theatermovie.showId,
                movieId : theatermovie.movieId,
                costPerTicket: theatermovie.costPerTicket  
              }

        axios.post("http://localhost:8085/theatermovie/add",payload).then(resp=>alert("Theater Movie Details are added"+resp.data.id));
    navigate(-1);
    }
}

        return(
            <div className="App">
                <div class="alert alert-info" role="alert">
                    <p class="h2"> Insert Theater Movie Details...!</p>
                </div>
                <div class="h4">

                <ul class="list-group">
                <div class="list-group-item">
                    <label>ID</label>
                    <li class=""> </li>
                    <input type="number" name="id" value={theatermovie.id} onChange={handleChange}/>
                    {
                        formErrors.idErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.idErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Theater_ID</label>
                    <li class=""> </li>
                    <input type="number" name="theaterId" value={theatermovie.theaterId} onChange={handleChange}/>
                    {
                        formErrors.theaterIdErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.theaterIdErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Show_ID</label>
                    <li class=""> </li>
                    <input type="number" name="showId" value={theatermovie.showId} onChange={handleChange}/>
                    {
                        formErrors.showIdErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.showIdErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Movie_ID</label>
                    <li class=""> </li>
                    <input type="number" name="movieId" value={theatermovie.movieId} onChange={handleChange}/>
                    {
                        formErrors.movieIdErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.movieIdErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Cost Per Ticket</label>
                    <li class=""> </li>
                    <input type="number" name="costPerTicket" value={theatermovie.costPerTicket} onChange={handleChange}/>
                    {
                        formErrors.costPerTicketErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.costPerTicketErr}
                        </div>
                    }
                    </div>
                    </ul>
                </div>
                <div class="btn-btn-info">
                    <button onClick={handleSubmit}><p class="h2">Add</p></button>
                    <button type="button"></button>
                </div>
            </div>
        )
    }
export default AddTheaterMovie;