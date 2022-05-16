import React, {useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router";

function AddTheater(){
    const [theater, setTheater]=useState({
            theaterId: "",
            theaterName: "",
            city: "",
            address: "",
            phone: ""

})

const navigate = useNavigate();

const [formErrors, setFormErrors] = useState({});

    const handleChange=(event)=> {
        setTheater(theater => ({...theater,[event.target.name]: event.target.value}));
    }
    const handleSubmit=()=> {

        let errors ={};

        if(!theater.theaterId){
            errors['theaterIdErr'] = "Please Enter TheaterId";
        }
        if(!theater.theaterName){
            errors['theaterNameErr'] = "Theater Name is required";
        }
        if(!theater.city){
            errors['cityErr'] = "Please Enter City Name";
        }
        if(!theater.address){
            errors['addressErr'] = "Please Enter theater Address";
        }
        if(!theater.phone){
            errors['phoneErr'] = "Contact Number is required";
        }

        setFormErrors(errors);
        const noErrors=Object.keys(errors).length===0;
        if (noErrors){
            const payload ={
                theaterId: theater.theaterId,
                theaterName : theater.theaterName,
                city : theater.city,
                address: theater.address,
                phone: theater.phone   
              }

        axios.post("http://localhost:8085/api/theater/add",payload).then(resp=>alert("Theater Details are added"+resp.data.theaterId));
    navigate(-1);
    }
}
        return(
            
            <div className="App">
       <div class="alert alert-success" role="alert">
           <p class="h2">ENTER THEATER DETAILS...!</p>
                  </div>
                  <div class="h4">
                  <ul class="list-group">
                <div class="list-group-item">
                    <label>Theater ID</label>
                    <li class=""> </li>
                    
                    <input type="number" name="theaterId" value={theater.theaterId} onChange={handleChange}/>
                    {
                        formErrors.theaterIdErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.theaterIdErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Theater Name</label>
                    <li class=" "></li>
                    <input type="text" name="theaterName" value={theater.theaterName} onChange={handleChange}/>
                    {
                        formErrors.theaterNameErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.theaterNameErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>City</label>
                    <li class=" "></li>
                    <input type="text" name="city" value={theater.city} onChange={handleChange}/>
                    {
                        formErrors.cityErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.cityErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Address</label>
                    <li class=" "></li>
                    <input type="text" name="address" value={theater.address} onChange={handleChange}/>
                    {
                        formErrors.addressErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.addressErr}
                        </div>
                    }
                </div>
                <div class="list-group-item">
                    <label>Phone</label>
                    <li class=" "></li>
                    <input type="number" name="phone" value={theater.phone} onChange={handleChange}/>
                    {
                        formErrors.phoneErr && <div style={{color:"red",paddingBottom:10}}>
                            {formErrors.phoneErr}
                        </div>
                    }
                </div>
                </ul>
                     </div>
                <div class="btn btn-info">
                    <button onClick={handleSubmit}><p class="h2">Add</p></button>
                    <button type="button"></button>
                </div>
                
            </div>
            
        )
    }
export default AddTheater;