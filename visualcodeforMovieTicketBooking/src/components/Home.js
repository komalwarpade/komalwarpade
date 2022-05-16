
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'; export default function Home() {
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
      <h1>Home Page</h1>
      <p>
        <Link to="/allCustomer"><button>click here to see all customers</button></Link> </p>
      {/* <p>
        <Link to="/createCustomer"><button>click here to see create customers</button></Link> </p> */}
      {/* <p>
<Link to="/fetchCustomer"><button>click here to see fetchcustomers</button></Link>
</p>
<p>
<Link to="/updateCustomer"><button>click here to see update customers</button></Link>
</p>
<p>
<Link to="/CustomerDashboard"><button>click here to see customerDashboard</button></Link>
</p>
<p>
<Link to="/deleteCustomer"><button>click here to see delete customers</button></Link>
</p> */}
      <p>
        <Link to="/AdminDashboard"><button>click here to see AdminDashboard</button></Link>
      </p>
      <div>
        <button onClick={logoutButton} className="btn btn-primary">logout</button>
      </div>
    </div>
  )
}


