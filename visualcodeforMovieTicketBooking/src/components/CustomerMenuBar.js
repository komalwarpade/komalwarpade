import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
// import bgimage from '../images/bgimage.png';
const CustomerMenuBar = () => {



const navigate=useNavigate();
const logout=()=>{
navigate("/");
}
// const myStyle={
// backgroundImage:
// `url(${bgimage})`,
// height:'100vh',
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat',
// };



return (
<div >


<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand >Customer</Navbar.Brand>
<Nav className="me-auto">
<Nav.Link href="/customermovies">Movie List</Nav.Link>
<Nav.Link href="/customertheater">Theatre Details</Nav.Link>
<Nav.Link href="/customertimings">Theatre Timings</Nav.Link>
<Nav.Link href="/customershows">customer Shows</Nav.Link>
<Nav.Link href="/addbooking">AddBooking</Nav.Link>
</Nav>
</Container>
<Button variant="primary" onClick={logout}>Logout</Button>
</Navbar>



<br />




</div>
)
}



export default CustomerMenuBar