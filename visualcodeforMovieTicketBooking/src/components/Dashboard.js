import React from "react";
import { Link } from "react-router-dom";
// import show from '../images/show.jpg';
import '../App.css';
const Dashboard=() => {
    // const myStyle={
    //     backgroundImage:
    //     `url(${show})`,
    //     height: '100vh',
    //     fontSize: '30px',
    //     backgroundRepeat: 'no-repeat',

    // };


    return(
        
        <div >
            <div className="App">
            <h2 class="h2">
                WELCOME Admin...!
            </h2>
            </div>

            <div className="App">
                
                    
                <p><Link to="/theater/add">Add a new Theater Details</Link></p>
                <p><Link to="/theatermovie/add">Add a new Theater Movie Details</Link></p>
                <p><Link to="/theater/get">Fetch All Theater Details added</Link></p>
                <p><Link to="/theatermovie/get">Fetch All Theater Movie Details </Link></p>

            </div>
            
           
        </div>
    )
}
export default Dashboard;