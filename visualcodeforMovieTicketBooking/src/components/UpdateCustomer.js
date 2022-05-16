import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
// import { baseUrl } from '../util/AppConstants';
function UpdateCustomer() {
    const [customer, setCustomer] = useState({
        id :"",
        Username:"",
        Password:"",
        CustomerName:"",
        Email:"",
        Mobile:"",
        Address:""
       
        

    });
    const { id } = useParams();  
    const navigate = useNavigate();
    const fetchCustomerById = () => {
        axios.get("http://localhost:8085/api/customer/get/"+id).then(resp => setCustomer(resp.data))
    }
    useEffect(fetchCustomerById);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        setCustomer(customer => ({ ...customer, [event.target.name]: event.target.value }));
    }

    const emp = () =>
    {
            let errors={};
                errors['emailErr'] = ""
                setFormErrors(errors);
    }

    const handleOnChange = (email) => {  
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;     
       // let re=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if ( re.test(email.target.value) ) {
            emp();
            handleChange(email);
        }
        else {
            handleChange(email);
            if(email.target.value===""){emp();}
            else
            {
                let errors={};
                errors['emailErr'] = "email  is not correct"
                setFormErrors(errors);
            }
        }
    }
    const handleSubmit = () => {

        let errors = {};
        if (!customer.Username) {
            errors['usernameErr'] = "username is required"
        }
        if (!customer.Password) {
            errors['passwordErr'] = "password is required"
        }
        if (!customer.CustomerName) {
            errors['customerNameErr'] = "Customer Name is required";
        }
        if (!customer.Email) {
            errors['emailErr'] = "email  is required"
        }
        if (!customer.Mobile ) {
            errors['mobileErr'] = "mobile is required"
        }
        if (!customer.Address) {
            errors['addressErr'] = " address is required"
        }
       

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        const palyload = {
            id :id,
            username:customer.Username,
            password:customer.Password,
            role:"customer",
            customerName : customer.CustomerName,
            email :customer.Email,
            mobile :customer.Mobile,
            address :customer.Address
           
        }
        console.log(palyload);
        axios.put("http://localhost:8085/api/customer/update", palyload)
            .then(resp => {
                alert("customer updated successfully:");
                navigate("/allCustomer");});
           
        }
    }
    return (
        <div>  
            <div>
              <lable>USERNAME</lable>
             <input type="text" name="Username" value={customer.Username} onChange={handleChange}/>
                {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
          </div>
          <div>
              <lable>PASSWORD</lable>
             <input type="password" name="Password" value={customer.Password} onChange={handleChange}/>
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
          </div>   
           
            <div>
              <lable> CUSTOMER NAME</lable>
             <input type="text" name="CustomerName" value={customer.CustomerName} onChange={handleChange} />
                {
                    formErrors.customerNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.customerNameErr}</div>
                }
          </div>
          <div>
              <lable> EMAIL</lable>
             <input type="text" name="Email" value={customer.Email} onChange={handleOnChange}/>
                { 
                    formErrors.emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailErr}</div>
                }
          </div>
          <div>
              <lable>MOBILE</lable>
             <input type="number" name="Mobile" value={customer.Mobile} onChange={handleChange}/>
                {
                    formErrors.mobileErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.mobileErr}</div>
                }
          </div>
          <div>
              <lable>ADDRESS</lable>
             <input type="text" name="Address" value={customer.Address} onChange={handleChange}/>
                {
                    formErrors.addressErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.addressErr}</div>
                }
          </div>
          

            <div>
                <button onClick={handleSubmit}>Update</button>
            </div>
            
        </div>
    )
}
export default UpdateCustomer;