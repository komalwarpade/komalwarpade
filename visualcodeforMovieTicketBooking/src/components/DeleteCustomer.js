import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../util/AppConstants';
function DeleteCustomer() {
const[customer, setCustomer] = useState(null)
const { id } = useParams();
const navigate = useNavigate();
const fetchCustomerById = () => {
axios.get("http://localhost:8085/api/customer/get/" + id).then(resp => setCustomer(resp.data))
}
useEffect(fetchCustomerById);
const deleteCustomer = () => {
axios.delete("http://localhost:8085/api/customer/delete/ "+id).then(resp => {
alert(resp.data);
navigate("/allCustomer");
})
navigate("/allCustomer");




}
return (
<div>
<h2>Customer Details</h2>
{
customer !== null &&
<div >
{/* <p> id : {customer.id}</p> */}
<p> name : {customer.customerName}</p>
<p> email : {customer.email}</p>
<p> mobile : {customer.mobile}</p>
<p> address : {customer.address}</p>
<p> username : {customer.username}</p>
<p> password : {customer.password}</p>





</div>
}
<div><button onClick={deleteCustomer}>Delete</button></div>
</div>
)
}
export default DeleteCustomer;