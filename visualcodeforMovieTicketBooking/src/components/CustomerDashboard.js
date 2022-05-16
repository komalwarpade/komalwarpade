import React from 'react';
import { useNavigate } from 'react-router';
function CustomerDashboard() {
    const myUser = JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();
    const logoutButton = () => {
        if (myUser != null) {
            localStorage.removeItem("myUser");
            localStorage.clear();
            alert("You have successfully logged out.")
            navigate("/");
        }
    }
    return (

        <div>
            <h1>Customer Dashboard</h1>
            <h2>Welcome {myUser.customerName}</h2>
            <button onClick={logoutButton}>logout</button>
        </div>
    )
}
export default CustomerDashboard;