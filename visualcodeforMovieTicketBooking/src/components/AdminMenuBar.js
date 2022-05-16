import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
// import bgimage from '../images/bgimage.png';

const AdminMenuBar = () => {



const navigate=useNavigate();
const logout=()=>{
navigate("/");
}
const handleClick=()=>{
navigate("/allCustomer");
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
<div>
<>
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand >ADMIN</Navbar.Brand>
<Nav className="me-auto">
<Nav.Link href="/movies">Movie Management</Nav.Link>
<Nav.Link href="/show/get">Movie Show Management</Nav.Link>
<Nav.Link href="/theater/get">Theatre Management</Nav.Link>
<Nav.Link href="/theatermovie/get">Theatre Movie Management</Nav.Link>
<Nav.Link href="/allbookings">Booking Management</Nav.Link>

</Nav>

</Container>
<Button variant="outline-success" onClick={logout}>Logout</Button>
</Navbar>
<br />
</>
</div>



<div style={{
position: 'absolute', left: '30%', top: '50%',
transform: 'translate(-50%, -50%)'
}}>
<centre>
<Button variant="dark" size="lg" onClick={handleClick}>View and Edit Customers</Button>
</centre>
</div>



</div>

)
}



export default AdminMenuBar