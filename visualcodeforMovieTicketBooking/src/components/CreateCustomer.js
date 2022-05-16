import React, { useState } from 'react';
import axios from 'axios';

function CreateCustomer() {
    const [customer, setCustomer] = useState({
        customerName: "",
        email: "",
        mobile: "",
        address: "",
        // role:"",
        username: "",
        password: ""

    })
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event) => {
        setCustomer(customer => ({ ...customer, [event.target.name]: event.target.value }));
    }

    const emp = () => {
        let errors = {};
        errors['emailErr'] = ""
        setFormErrors(errors);
    }

    const handleOnChange = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //const re=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        if (re.test(email.target.value)) {
            emp();
            handleChange(email);
        }
        else {
            handleChange(email);
            if (email.target.value === "") { emp(); }
            else {
                let errors = {};
                errors['emailErr'] = "email  is not correct"
                setFormErrors(errors);
            }
        }
    }

    const handleSubmit = () => {
        //validate form
        let errors = {};
        if (!customer.customerName) {
            errors['customerNameErr'] = "Customer Name is required";
        }
        if (!customer.email) {
            errors['emailErr'] = "email  is required"
        }
        if (!customer.mobile) {
            errors['mobileErr'] = "mobile is required"
        }
        if (!customer.address) {
            errors['addressErr'] = " address is required"
        }
        if (!customer.username) {
            errors['usernameErr'] = "username is required"
        }
        if (!customer.password) {
            errors['passwordErr'] = "password is required"
        }
        // if (!customer.role) {
        //     errors['roleErr'] = "role is required"
        // }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const palyload = {
                username: customer.username,
                role: "customer",
                password: customer.password,
                customerName: customer.customerName,
                email: customer.email,
                mobile: customer.mobile,
                address: customer.address,
                

            }
            axios.post("http://localhost:8085/api/customer/add", palyload)
                .then(resp => {
                    alert(resp.data.role + " details is saved succesfully");
                }).catch(error => {
                    alert("Customer Already Exists");
                })

        }
    }
    return (
        <div>
             <div>
                <label>Username</label>
                <input type="text" name="username" value={customer.username} onChange={handleChange} />
                {
                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                }
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={customer.password} onChange={handleChange} />
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            <div>
                <label>Customer Name</label>
                <input type="text" name="customerName" value={customer.customerName} onChange={handleChange} />
                {
                    formErrors.customerNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.customerNameErr}</div>
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={handleOnChange} />
                {
                    formErrors.emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailErr}</div>
                }
            </div>
            <div>
                <label>Mobile</label>
                <input type="number" name="mobile" onChange={handleChange} />
                {
                    formErrors.mobileErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.mobileErr}</div>
                }
            </div>
            <div>
                <label>Address</label>
                <input type="text" name="address" value={customer.address} onChange={handleChange} />
                {
                    formErrors.addressErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.addressErr}</div>
                }
            </div>
           
            {/* <div>
                <label>Role</label>
                <input type="role" name="role" value={customer.role} onChange={handleChange} />
                {
                    formErrors.roleErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.roleErr}</div>
                }
            </div> */}


            <div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={() => { window.location.href = "/" }}> Login</button>
            </div>
        </div>
    )
}
export default CreateCustomer;