import React from 'react';
import { useNavigate } from 'react-router';
function AdminDashboard() {
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
            <h1>Admin Dashboard</h1>
            <h2>Welcome {myUser.customerName}</h2>
            <button onClick={logoutButton}>logout</button>
        </div>
    )
}
export default AdminDashboard;