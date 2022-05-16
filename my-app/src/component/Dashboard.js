import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
    return(

        <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
        // <div>
        //     <h2>MyDasboard</h2>
        //     <div>
        //         <Link to ="/Counter">Click here for counter</Link>
        //         <Link to ="/employees"> Click here for Employees</Link>
        //         <Link to = "/FetchMovie"> Click here for Movie List</Link>
        //         {/* <link to ="/Details"> Click here to view by ID</link> */}
        //         <Link to ="/Movie/add">Add Movie</Link>
        //     </div>
        // </div>
    )
    
}
export default Dashboard;