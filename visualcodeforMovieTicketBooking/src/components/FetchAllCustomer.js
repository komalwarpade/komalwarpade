import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'; function FetchAllCustomer() {
    const [customer, setCustomers] = useState([]);// useEffect act similarlyn as componentDidMount()
    const fetchAll = () => {
        axios.get("http://localhost:8085/api/customer/all").then(res => setCustomers(
            res.data
        ))
    }
    useEffect(fetchAll, []);
    return (
        <div>
            <div className='container-fluid'>
                <h3>Customer List</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr style={{ color: "blue" }}>
                            <th>Id</th>
                            <th>CustomerName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th colSpan={3}> Operations</th>
                        </tr>
                    </thead>
                    {customer.map((p, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td> {p.customerName}</td>
                            <td>{p.email}</td>
                            <td>{p.password}</td>
                            <td>{p.address}</td>
                            <td><Link to={`/fetchCustomer/${p.id}`}>view</Link></td>
                            {/* <td><Link to={`/updateCustomer/${p.id}`}>Update</Link></td>
                            <td><Link to={`/deleteCustomer/${p.id}`}>Delete</Link></td> */}
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}
export default FetchAllCustomer;