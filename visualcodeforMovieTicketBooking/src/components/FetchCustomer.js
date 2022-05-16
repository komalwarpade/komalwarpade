
import axios from "axios";
import React,{useEffect,useState} from "react";
import {useParams} from 'react-router';
//import {Link} from 'react-router-dom';
function FetchCustomer(){
const [customer,setCustomer]=useState(null);
const {id} = useParams(); const fetchcustomerById=()=>{
axios.get("http://localhost:8085/api/customer/get/"+id).then(resp=>setCustomer(resp.data))
}
useEffect(fetchcustomerById); return(
<div>
<h2>Customer Details</h2>
{
customer !== null && <div>
<p>CUSTOMER ID: {customer.id}</p>
<p>CUSTOMER NAME: {customer.customerName}</p>
<p>EMAIL: {customer.email}</p>
<p>MOBILE:{customer.mobile}</p>
<p>ADDRESS:{customer.address}</p>
<p>USERNAME:{customer.username}</p>
<p>PASSWORD:{customer.password}</p>
</div>
}
{/* <p> */}
{/* <Link to ="/movies">Click here to get back to customer list</Link></p> */}
</div>
)
}
export default FetchCustomer;


